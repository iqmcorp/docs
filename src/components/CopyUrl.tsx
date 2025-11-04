import React from "react";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const BADGE_BY_METHOD: Record<Method, string> = {
  GET: "badge--primary",
  POST: "badge--success",
  PUT: "badge--warning",
  PATCH: "badge--info",
  DELETE: "badge--danger",
};

function splitUrlForDisplay(full: string): {
  origin: string;
  restRaw: string;       // encoded
  restDisplay: string;   // decoded for visuals
} {
  // Safe decode helper
  const safeDecode = (s: string) => {
    try { return decodeURI(s); } catch { return s; }
  };

  try {
    const u = new URL(full);
    const restRaw = (u.pathname || "/") + (u.search || "") + (u.hash || "");
    return {
      origin: u.origin,
      restRaw,
      restDisplay: safeDecode(restRaw),
    };
  } catch {
    // Not an absolute URL: do a best-effort split
    const m = full.match(/^(https?:\/\/[^/]+)(.*)$/i);
    if (m) {
      return {
        origin: m[1],
        restRaw: m[2] || "/",
        restDisplay: safeDecode(m[2] || "/"),
      };
    }
    return { origin: "", restRaw: full, restDisplay: safeDecode(full) };
  }
}

export default function CopyUrl({
  method = "GET",
  url,
}: {
  method?: string;
  url: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const m = (method || "GET").trim().toUpperCase() as Method;
  const badgeClass = BADGE_BY_METHOD[m] ?? BADGE_BY_METHOD.GET;

const { origin, restDisplay } = splitUrlForDisplay(url);

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
      {origin && <span className="path-text__origin">{origin}</span>}
      <span className="path-text__rest">{restDisplay}</span>
    </button>
    </span>
  );
}
