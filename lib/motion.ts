// Shared Framer Motion presets. EASE mirrors the design's --ease-soft token.
const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

/** Scroll-triggered reveal (fade + slide up), plays once. */
export const reveal = (delay = 0, y = 24) =>
  ({
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: EASE, delay },
  }) as const;

/**
 * Scroll-triggered reveal that glides the item in from the side its image sits
 * on — "left" (from the left), "right" (from the right), or "none" for a plain
 * fade-up. Lets each row enter from behind its own visual anchor. Plays once.
 * (Sections using this set `overflow-x: clip` so the off-canvas start never
 * spawns a horizontal scrollbar.)
 */
export const slideIn = (dir: "left" | "right" | "none" = "none", delay = 0) => {
  const x = dir === "left" ? -64 : dir === "right" ? 64 : 0;
  const y = dir === "none" ? 24 : 0;
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE, delay },
  } as const;
};

/** On-mount entrance (used above the fold in the hero). */
export const entrance = (delay = 0, y = 20) =>
  ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  }) as const;
