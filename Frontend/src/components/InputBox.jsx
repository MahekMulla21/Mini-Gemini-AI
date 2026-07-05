import { useEffect, useRef, useState } from "react";
import { MicIcon, PaperclipIcon, SendIcon } from "./Icons";

const MAX_CHARS = 4000;

function InputBox({ onSend, disabled, draft, onDraftChange }) {
  const [value, setValue] = useState(draft || "");
  const textareaRef = useRef(null);

  // Keep in sync if a parent-provided suggestion fills the box.
  useEffect(() => {
    if (draft !== undefined && draft !== value) setValue(draft);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 200) + "px";
  }, [value]);

  function handleChange(e) {
    const next = e.target.value.slice(0, MAX_CHARS);
    setValue(next);
    onDraftChange?.(next);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function submit() {
    if (disabled || !value.trim()) return;
    onSend(value);
    setValue("");
    onDraftChange?.("");
  }

  return (
    <div className="input-dock">
      <div className="input-box">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here…"
          rows={1}
        />
        <div className="input-row">
          <div className="input-tools">
            <button
              className="icon-btn"
              title="Voice input (coming soon)"
              disabled
            >
              <MicIcon />
            </button>
            <button
              className="icon-btn"
              title="Attach a file (coming soon)"
              disabled
            >
              <PaperclipIcon />
            </button>
          </div>
          <div className="input-tools">
            <span className="char-count">
              {value.length} / {MAX_CHARS}
            </span>
            <button
              className="send-btn"
              onClick={submit}
              disabled={disabled || !value.trim()}
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
      <p className="input-disclaimer">
        Gemini AI may display inaccurate info, so double-check its responses.
      </p>
    </div>
  );
}

export default InputBox;
