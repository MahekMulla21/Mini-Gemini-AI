// Small inline icon set shared across the app so every icon
// renders with zero network requests and inherits currentColor.

export function SparkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={props.size || 16}
      height={props.size || 16}
      {...props}
    >
      <path
        d="M12 2 L14 9 L21 11 L14 13 L12 20 L10 13 L3 11 L10 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={15} height={15} {...props}>
      <path
        d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CopyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={15} height={15} {...props}>
      <rect
        x="8.5"
        y="8.5"
        width="11"
        height="11"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.5 15.5V6a2 2 0 0 1 2-2h9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={15} height={15} {...props}>
      <path
        d="M12 3v12m0 0 4.5-4.5M12 15 7.5 10.5M4 18v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunMoonIcon({ mode = "dark", ...rest }) {
  return mode === "dark" ? (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} {...rest}>
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.7 6.7 0 0 0 10.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} {...rest}>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.4 5.6l-1.55 1.55M7.15 16.85 5.6 18.4M18.4 18.4l-1.55-1.55M7.15 7.15 5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={18} height={18} {...props}>
      <path d="m4 12 16-8-6.5 16-2.5-7-7-1Z" fill="currentColor" />
    </svg>
  );
}

export function MicIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} {...props}>
      <rect
        x="9"
        y="3"
        width="6"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 11a7 7 0 0 0 14 0M12 18v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperclipIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} {...props}>
      <path
        d="M7 12.5 15 4.5a3.5 3.5 0 1 1 5 5l-9 9a5 5 0 1 1-7-7l8-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThumbUpIcon({ active, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      width={14}
      height={14}
      {...rest}
    >
      <path
        d="M7 20V10l4.5-6.5a1.5 1.5 0 0 1 2.7 1l-1 4.5H18a2 2 0 0 1 1.95 2.45l-1.6 7A2 2 0 0 1 16.4 20H7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 20H4V10h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpeakerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={14} height={14} {...props}>
      <path
        d="M4 9v6h4l5 4V5L8 9H4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChatBubbleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={15} height={15} {...props}>
      <path
        d="M4 5h16v10H9l-5 4V5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PersonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} {...props}>
      <circle
        cx="12"
        cy="8.2"
        r="3.4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 19.5c1.2-3.4 3.9-5 7-5s5.8 1.6 7 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
