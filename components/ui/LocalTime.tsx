"use client";

import { useEffect, useMemo, useState } from "react";

// Live-updating local time in Europe/Prague (24h). Renders a stable placeholder
// until mounted so server and client first render match.
export function LocalTime() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount gate for SSR-safe time render
    setMounted(true);
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const fmt = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Prague",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    []
  );

  return <span className="mono">{mounted ? fmt.format(now) : "--:--"} CET</span>;
}
