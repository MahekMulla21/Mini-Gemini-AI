import {
  SparkIcon,
  PlusIcon,
  TrashIcon,
  DownloadIcon,
  SunMoonIcon,
  ChatBubbleIcon,
} from "./Icons";

function relativeTime(ts) {
  const diffMs = Date.now() - ts;
  const min = Math.round(diffMs / 60000);
  if (min < 1) return "just now";
  if (min < 60) return `${min} min${min === 1 ? "" : "s"} ago`;
  const hrs = Math.round(min / 60);
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  const days = Math.round(hrs / 24);
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

function Sidebar({
  sessions,
  activeId,
  onNewChat,
  onSelect,
  onDelete,
  onClearChat,
  onExportChat,
  theme,
  onToggleTheme,
  open,
}) {
  return (
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <div className="brand">
        <div className="brand-mark">
          <SparkIcon size={20} />
        </div>
        <div>
          <h1 className="brand-title">
            Mini <span>Gemini</span> AI
          </h1>
          <p className="brand-subtitle">
            Your AI assistant, powered by the Gemini API
          </p>
        </div>
      </div>

      <button className="new-chat-btn" onClick={onNewChat}>
        <PlusIcon />
        New chat
      </button>

      <div className="recent-chats">
        <p className="recent-chats-label">Recent chats</p>
        <div className="recent-chats-list">
          {sessions.map((s) => (
            <button
              key={s.id}
              className={`chat-item ${s.id === activeId ? "chat-item--active" : ""}`}
              onClick={() => onSelect(s.id)}
            >
              <ChatBubbleIcon />
              <span className="chat-item-text">
                <span className="chat-item-title">{s.title || "New chat"}</span>
                <span className="chat-item-time">
                  {relativeTime(s.createdAt)}
                </span>
              </span>
              <span
                className="chat-item-delete"
                role="button"
                tabIndex={0}
                aria-label="Delete chat"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(s.id);
                }}
              >
                <TrashIcon />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        <button className="footer-row footer-row--danger" onClick={onClearChat}>
          <TrashIcon />
          Clear chat
        </button>
        <button className="footer-row" onClick={onToggleTheme}>
          <SunMoonIcon mode={theme} />
          {theme === "dark" ? "Dark mode" : "Light mode"}
          <span className={`switch ${theme === "dark" ? "switch--on" : ""}`}>
            <span className="switch-knob" />
          </span>
        </button>
        <button className="footer-row" onClick={onExportChat}>
          <DownloadIcon />
          Export chat
        </button>

        <div className="powered-by">
          <SparkIcon size={13} />
          Powered by <span>Gemini API</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
