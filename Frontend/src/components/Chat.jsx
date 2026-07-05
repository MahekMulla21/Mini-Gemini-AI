import { useEffect, useRef } from "react";
import Message from "./Message";
import Loader from "./Loader";
import { SparkIcon } from "./Icons";

const SUGGESTIONS = [
  "Explain what artificial intelligence is in simple words",
  "Give me 5 productivity tips for remote work",
  "Write a short poem about the night sky",
  "Help me debug a React useEffect loop",
];

function Chat({ messages, loading, error, onSuggestion }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const isEmpty = messages.length === 0;

  return (
    <div className="chat-scroll" ref={scrollRef}>
      <div className="chat-inner">
        {isEmpty && !loading ? (
          <div className="empty-state">
            <div className="empty-orb">
              <SparkIcon size={26} />
            </div>
            <h2>Ask me anything</h2>
            <p>Start a conversation and Gemini AI will pick up from here.</p>
            <div className="suggestion-grid">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="suggestion-card"
                  onClick={() => onSuggestion(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m) => (
            <Message
              key={m.id}
              role={m.role}
              content={m.content}
              timestamp={m.timestamp}
            />
          ))
        )}

        {loading && <Loader />}

        {error && <div className="error-banner">{error}</div>}
      </div>
    </div>
  );
}

export default Chat;
