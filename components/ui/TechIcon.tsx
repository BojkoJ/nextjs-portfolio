"use client";

import { useMemo, useState } from "react";
import { iconSrc, inlineIconHtml } from "@/lib/icons";

// Tech badge icon: inline SVG/PNG override → svgl.app remote → mono initials.
export function TechIcon({ name, size = 16 }: { name: string; size?: number }) {
  const [errored, setErrored] = useState(false);
  const inline = useMemo(() => inlineIconHtml(name), [name]);
  const src = useMemo(() => iconSrc(name), [name]);

  // 1. Inline SVG/HTML (hand-authored)
  if (inline) {
    return (
      <span
        className="inline-svg"
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        dangerouslySetInnerHTML={{ __html: inline }}
      />
    );
  }

  // 2. svgl.app remote, 3. mono initials fallback
  if (errored || !src) {
    const initials =
      name
        .replace(/\.js$/i, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, 2)
        .toUpperCase() || "??";
    return (
      <span className="mono-fallback" style={{ width: size, height: size }}>
        {initials}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}
