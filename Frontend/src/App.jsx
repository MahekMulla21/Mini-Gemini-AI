import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chat from "./components/Chat";
import InputBox from "./components/InputBox";
import "./App.css";

const API_URL = "https://mini-gemini-ai-1.onrender.com/generate";
const SESSIONS_KEY = "mini-gemini-sessions";
const THEME_KEY = "mini-gemini-theme";

const uid = () => Math.random().toString(36).slice(2, 10);
const createSession = (title = "New chat") => ({
  id: uid(),
  title,
  createdAt: Date.now(),
  messages: [],
});

function loadSessions() {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed) && parsed.length) return parsed;
  } catch {
    // fall through to default session
  }
  return [createSession("Welcome")];
}

function App() {
  const [sessions, setSessions] = useState(loadSessions);
  const [activeId, setActiveId] = useState(() => sessions[0].id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_KEY) || "dark",
  );

  useEffect(() => {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const activeSession = sessions.find((s) => s.id === activeId) || sessions[0];

  const updateSession = useCallback((id, updater) => {
    setSessions((prev) => prev.map((s) => (s.id === id ? updater(s) : s)));
  }, []);

  function handleNewChat() {
    const s = createSession();
    setSessions((prev) => [s, ...prev]);
    setActiveId(s.id);
    setError("");
    setSidebarOpen(false);
  }

  function handleSelectSession(id) {
    setActiveId(id);
    setError("");
    setSidebarOpen(false);
  }

  function handleClearChat() {
    updateSession(activeSession.id, (s) => ({ ...s, messages: [] }));
  }

  function handleDeleteSession(id) {
    setSessions((prev) => {
      const next = prev.filter((s) => s.id !== id);
      const safeNext = next.length ? next : [createSession()];
      if (id === activeId) setActiveId(safeNext[0].id);
      return safeNext;
    });
  }

  function handleCopyAll() {
    const text = activeSession.messages
      .map((m) => `${m.role === "user" ? "You" : "Gemini AI"}: ${m.content}`)
      .join("\n\n");
    navigator.clipboard.writeText(text || "Nothing to copy yet.");
  }

  function handleExportChat() {
    const text = activeSession.messages
      .map(
        (m) =>
          `${m.role === "user" ? "You" : "Gemini AI"} (${new Date(m.timestamp).toLocaleString()}):\n${m.content}`,
      )
      .join("\n\n");
    const blob = new Blob([text || "No messages yet."], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(activeSession.title || "chat").replace(/\s+/g, "-").toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleSend(prompt) {
    const trimmed = prompt.trim();
    if (!trimmed || loading) return;
    setError("");

    const userMsg = {
      id: uid(),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    const isFirst = activeSession.messages.length === 0;

    updateSession(activeSession.id, (s) => ({
      ...s,
      title: isFirst ? trimmed.slice(0, 32) : s.title,
      messages: [...s.messages, userMsg],
    }));

    setLoading(true);
    try {
      const res = await axios.post(API_URL, { prompt: trimmed });
      const aiMsg = {
        id: uid(),
        role: "assistant",
        content: res.data?.response ?? "Hmm, I didn't get a response back.",
        timestamp: Date.now(),
      };
      updateSession(activeSession.id, (s) => ({
        ...s,
        messages: [...s.messages, aiMsg],
      }));
    } catch {
      setError(
        "Couldn't reach Gemini AI. Check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <div className="app-shell">
      <div
        className={`sidebar-scrim ${sidebarOpen ? "sidebar-scrim--visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <Sidebar
        sessions={sessions}
        activeId={activeSession.id}
        onNewChat={handleNewChat}
        onSelect={handleSelectSession}
        onDelete={handleDeleteSession}
        onClearChat={handleClearChat}
        onExportChat={handleExportChat}
        theme={theme}
        onToggleTheme={toggleTheme}
        open={sidebarOpen}
      />

      <main className="main-panel">
        <Header
          title={activeSession.title}
          onCopyAll={handleCopyAll}
          onClearChat={handleClearChat}
          theme={theme}
          onToggleTheme={toggleTheme}
          onMenuClick={() => setSidebarOpen((v) => !v)}
        />

        <Chat
          messages={activeSession.messages}
          loading={loading}
          error={error}
          onSuggestion={(text) => setDraft(text)}
        />

        <InputBox
          onSend={handleSend}
          disabled={loading}
          draft={draft}
          onDraftChange={setDraft}
        />
      </main>
    </div>
  );
}

export default App;
