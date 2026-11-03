"use client";

import { useMemo, useState } from "react";
import { iconSrc, inlineIconHtml } from "@/lib/icons";

// Tech badge icon: inline SVG/PNG override -> self-hosted /icons SVG → mono initials.
export function TechIcon({ name, size = 16 }: { name: string; size?: number }) {
  const [errored, setErrored] = useState(false);
  const inline = useMemo(() => inlineIconHtml(name), [name]);
  const src = useMemo(() => iconSrc(name), [name]);

  // 1. Inline SVG/HTML (hand-authored)
  if (inline) {
    return (
      <span
        className="inline-svg"
        aria-hidden="true"
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

  // 2. self-hosted file missing/failed, 3. mono initials fallback
  if (errored || !src) {
    const initials =
      name
        .replace(/\.js$/i, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, 2)
        .toUpperCase() || "??";
    return (
      <span
        className="mono-fallback"
        aria-hidden="true"
        style={{ width: size, height: size }}
      >
        {initials}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="" /* decorative: every use sits next to the tech name as text */
      width={size}
      height={size}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}
