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

/** On-mount entrance (used above the fold in the hero). */
export const entrance = (delay = 0, y = 20) =>
  ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  }) as const;
