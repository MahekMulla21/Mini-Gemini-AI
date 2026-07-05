import { SparkIcon } from "./Icons";

// Shown in place of the AI bubble while a response is in flight.
// Three "moons" orbit a core, echoing the sparkle/orbit motif of
// the rest of the app instead of a generic three-dot pulse.
function Loader() {
  return (
    <div className="msg-row msg-row--assistant">
      <div className="avatar avatar--ai">
        <span className="avatar-glow" />
        <SparkIcon />
      </div>
      <div
        className="bubble bubble--ai bubble--loading"
        aria-live="polite"
        aria-label="Gemini AI is thinking"
      >
        <div className="orbit">
          <span className="orbit-core" />
          <span className="orbit-dot orbit-dot--1" />
          <span className="orbit-dot orbit-dot--2" />
          <span className="orbit-dot orbit-dot--3" />
        </div>
        <span className="orbit-label">thinking…</span>
      </div>
    </div>
  );
}

export default Loader;
