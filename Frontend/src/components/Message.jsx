import { useState } from "react";
import {
  SparkIcon,
  PersonIcon,
  CopyIcon,
  ThumbUpIcon,
  SpeakerIcon,
} from "./Icons";

function formatTime(ts) {
  return new Date(ts).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Message({ role, content, timestamp }) {
  const isUser = role === "user";
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function handleSpeak() {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return (
    <div
      className={`msg-row ${isUser ? "msg-row--user" : "msg-row--assistant"}`}
    >
      {!isUser && (
        <div className="avatar avatar--ai">
          <span className="avatar-glow" />
          <SparkIcon />
        </div>
      )}

      <div className="bubble-stack">
        <div className={`bubble ${isUser ? "bubble--user" : "bubble--ai"}`}>
          <p className="bubble-text">{content}</p>
        </div>
        <div className={`bubble-meta ${isUser ? "bubble-meta--user" : ""}`}>
          <span className="bubble-time">{formatTime(timestamp)}</span>
          {!isUser && (
            <span className="bubble-actions">
              <button
                className="icon-btn icon-btn--tiny"
                onClick={handleCopy}
                aria-label="Copy response"
                title={copied ? "Copied!" : "Copy"}
              >
                <CopyIcon />
              </button>
              <button
                className={`icon-btn icon-btn--tiny ${speaking ? "icon-btn--active" : ""}`}
                onClick={handleSpeak}
                aria-label="Read response aloud"
                title="Listen"
              >
                <SpeakerIcon />
              </button>
              <button
                className={`icon-btn icon-btn--tiny ${liked ? "icon-btn--active" : ""}`}
                onClick={() => setLiked((v) => !v)}
                aria-label="Mark as helpful"
                title="Helpful"
              >
                <ThumbUpIcon active={liked} />
              </button>
            </span>
          )}
        </div>
      </div>

      {isUser && (
        <div className="avatar avatar--user">
          <PersonIcon />
        </div>
      )}
    </div>
  );
}

export default Message;
