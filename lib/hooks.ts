"use client";

import { useEffect, useState } from "react";

// Scroll spy — picks the active section by reading line position (rather than
// intersection ratio, which is unreliable for very tall sections).
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const compute = () => {
      // Reading line: ~30% from the top of the viewport. The last section whose
      // top edge is above the line wins; if none are, the first section wins.
      const line = window.innerHeight * 0.3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - line <= 0) current = id;
        else break;
      }
      // At the very bottom, force-select the last section so a tall final
      // section (Contact) can still become active.
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (nearBottom) current = ids[ids.length - 1];
      setActive((prev) => (prev === current ? prev : current));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ids]);

  return active;
}
