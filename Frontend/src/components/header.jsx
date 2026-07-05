import { CopyIcon, TrashIcon, SunMoonIcon } from "./Icons";

function Header({
  title,
  onCopyAll,
  onClearChat,
  theme,
  onToggleTheme,
  onMenuClick,
}) {
  return (
    <header className="app-header">
      <div className="app-header-title">
        <button
          className="hamburger"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <span />
          <span />
          <span />
        </button>
        <h1>{title || "Mini Gemini AI"}</h1>
      </div>

      <div className="app-header-actions">
        <button className="pill-btn" onClick={onCopyAll}>
          <CopyIcon />
          <span>Copy all</span>
        </button>
        <button className="pill-btn pill-btn--danger" onClick={onClearChat}>
          <TrashIcon />
          <span>Clear chat</span>
        </button>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          <SunMoonIcon mode={theme} />
        </button>
      </div>
    </header>
  );
}

export default Header;
