import React from "react";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const BADGE_BY_METHOD: Record<Method, string> = {
  GET: "badge--primary",
  POST: "badge--success",
  PUT: "badge--warning",
  PATCH: "badge--info",
  DELETE: "badge--danger",
};

export default function CopyUrl({
  method = "GET",
  url,
}: {
  method?: string; // allow any case from MDX; we normalize below
  url: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const m = (method || "GET").trim().toUpperCase() as Method;
  const badgeClass = BADGE_BY_METHOD[m] ?? BADGE_BY_METHOD.GET; // fallback optional

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <span className="copy-url">
      <span className={`badge ${badgeClass}`}>{m}</span>
      <button
        type="button"
        className="path-text"
        onClick={onCopy}
        aria-label={`Copy ${url}`}
        title={copied ? "Copied!" : "Click to copy"}
        data-copied={copied || undefined}
      >
        {url}
      </button>
    </span>
  );
}
