"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "@/lib/hooks";
import { SECTION_IDS } from "@/lib/data";
import { GOPHER_HEAD_SVG } from "@/lib/gopherHeadSvg";

// A second gopher whose head climbs out over the TOP edge of the about.yaml card
// and whose pupils follow the cursor (technique adapted from
// https://buipalsulich.com/post/gopher-eyes/). The body sits behind the card
// (z-index below it); only the head pokes above the top edge. It emerges while
// Home is active and tucks back down behind the card when you scroll past.
//
// It links to go.dev. Because the visual sits BEHIND the card, clicks on the
// part of the head that overlaps the card edge would otherwise fall through to
// the card. So the hit target is a separate transparent <a> ABOVE the card,
// covering the visible head; pressing it scales the visual via shared state.
//
// It also blinks: at random 3-6s intervals it does a normal blink, occasionally
// a quick double-blink, and occasionally a "wave wink" that sweeps right→left.
// Eyelids are skin-coloured caps (the face is #F6D2A2, so any overshoot melts
// into the head) that scale down from the top; a soft lash line fades in when an
// eye is shut. Driven imperatively to avoid re-renders, like the pupil tracker.

const SPRING = { type: "spring", stiffness: 240, damping: 18 } as const;

const container: Variants = {
  hidden: { y: 130, opacity: 0, transition: SPRING },
  shown: { y: 0, opacity: 1, transition: { ...SPRING, delay: 0.5 } },
};

// Eyeball CENTRES in SVG user units (viewBox width below). The original gopher
// draws the pupils off-centre, capping how far they roam -- so, like the
// reference (buipalsulich.com/post/gopher-eyes), the pupils are re-centred on
// the eyeballs and orbit these points.
const VIEWBOX_W = 401.98;
const EYES = [
  { x: 131, y: 92 },
  { x: 258, y: 87 },
] as const;
// Reference geometry (user units): eye radius and pupil radius. A pupil slides
// up to (EYE_R - PUPIL_R) from the centre, so it reaches the eye's edge while
// staying inside it, hitting that max once the cursor is MAX_DIST_PX away.
const EYE_R = 42;
const PUPIL_R = 14.8;
const MAX_DIST_PX = 200;

// Eyelids reuse the exact sclera outlines (the white "bělmo") from the head SVG,
// so they're pixel-identical in size to the eyeballs — never larger. Filled with
// the body blue and scaled shut from the top to blink.
const LID_PATHS = [
  // Left eye (viewer's left, ~x131).
  "M83.103,104.35c14.047,54.85,101.864,40.807,98.554-14.213C177.691,24.242,69.673,36.957,83.103,104.35",
  // Right eye (viewer's right, ~x258).
  "M206.169,94.16c10.838,63.003,113.822,46.345,99.03-17.197C291.935,19.983,202.567,35.755,206.169,94.16",
] as const;
const LID_BLUE = "#6AD7E5";

export default function GopherEyes() {
  const homeActive = useActiveSection(SECTION_IDS) === "home";
  const [pressed, setPressed] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const leftPupil = useRef<SVGGElement>(null);
  const rightPupil = useRef<SVGGElement>(null);
  const leftLid = useRef<SVGPathElement>(null);
  const rightLid = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pupils = [leftPupil, rightPupil];
    let raf = 0;
    let mx = 0;
    let my = 0;

    const update = () => {
      raf = 0;
      const svg = svgRef.current;
      if (!svg) return;
      // Work entirely in screen pixels via getBoundingClientRect (immune to the
      // browser-zoom / scale quirks of SVGGraphicsElement.getScreenCTM, which
      // could leave the pupils stuck in the left half of each eye). The viewBox
      // preserves aspect ratio, so a single scale converts px <-> user units.
      const rect = svg.getBoundingClientRect();
      if (!rect.width) return;
      const scale = rect.width / VIEWBOX_W;
      EYES.forEach((eye, i) => {
        const g = pupils[i].current;
        if (!g) return;
        // Eye centre in screen pixels.
        const cx = rect.left + eye.x * scale;
        const cy = rect.top + eye.y * scale;
        const dx = mx - cx;
        const dy = my - cy;
        const angle = Math.atan2(dy, dx);
        // Travel grows with cursor distance (px), capped at the eye edge.
        const ratio = Math.min(Math.hypot(dx, dy) / MAX_DIST_PX, 1);
        const t = ratio * (EYE_R - PUPIL_R); // user units
        const tx = (Math.cos(angle) * t).toFixed(2);
        const ty = (Math.sin(angle) * t).toFixed(2);
        g.setAttribute("transform", `translate(${tx} ${ty})`);
      });
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Blink engine: schedules blinks with a setTimeout, and only spins a rAF loop
  // while a blink is actually in flight (idle the rest of the time).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lids = [leftLid.current, rightLid.current];
    // Exact top edge of each eyeball, read from its real geometry (immune to the
    // lid's own transform), so the lid pivots from the very top when it shuts.
    const tops = lids.map((el) => (el ? el.getBBox().y : 0));

    type Blink = {
      eye: 0 | 1;
      start: number;
      close: number;
      hold: number;
      open: number;
    };
    let blinks: Blink[] = [];
    let raf = 0;
    let timer = 0;

    const smooth = (x: number) => x * x * (3 - 2 * x);

    // Openness of a single blink at time `now`: 0 (open) -> 1 (shut) -> 0.
    const openness = (b: Blink, now: number) => {
      const e = now - b.start;
      if (e <= 0) return 0;
      if (e < b.close) return smooth(e / b.close);
      if (e < b.close + b.hold) return 1;
      const o = e - b.close - b.hold;
      if (o < b.open) return 1 - smooth(o / b.open);
      return 0;
    };
    const finished = (b: Blink, now: number) =>
      now - b.start >= b.close + b.hold + b.open;

    const tick = () => {
      raf = 0;
      const now = performance.now();
      for (let i = 0; i < 2; i++) {
        const lid = lids[i];
        if (!lid) continue;
        let v = 0;
        for (const b of blinks) if (b.eye === i) v = Math.max(v, openness(b, now));
        // Pin the lid's top edge and scale it down vertically (v=1 covers the
        // whole eye). matrix(1 0 0 s 0 top*(1-s)) keeps y=top fixed.
        const f = (tops[i] * (1 - v)).toFixed(3);
        lid.setAttribute("transform", `matrix(1 0 0 ${v.toFixed(4)} 0 ${f})`);
      }
      blinks = blinks.filter((b) => !finished(b, now));
      if (blinks.length) raf = requestAnimationFrame(tick);
      else schedule();
    };

    const emit = (next: Blink[]) => {
      blinks.push(...next);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const schedule = () => {
      timer = window.setTimeout(
        () => {
          const now = performance.now();
          const r = Math.random();
          if (r < 0.18) {
            // Double blink: two quick blinks back-to-back, well within 0.4s.
            const mk = (eye: 0 | 1, start: number): Blink => ({
              eye,
              start,
              close: 60,
              hold: 18,
              open: 80,
            });
            emit([mk(0, now), mk(1, now), mk(0, now + 190), mk(1, now + 190)]);
          } else if (r < 0.32) {
            // Wave wink: right shuts and holds while the left winks underneath,
            // then both reopen right→left — a ripple across the face (~0.7s).
            emit([
              { eye: 1, start: now, close: 110, hold: 230, open: 140 },
              { eye: 0, start: now + 200, close: 110, hold: 250, open: 140 },
            ]);
          } else {
            // Ordinary blink, both eyes together.
            const mk = (eye: 0 | 1): Blink => ({
              eye,
              start: now,
              close: 80,
              hold: 40,
              open: 110,
            });
            emit([mk(0), mk(1)]);
          }
        },
        3000 + Math.random() * 3000,
      );
    };

    schedule();
    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Visual gopher: behind the card, eyes tracking, press-scales. */}
      <motion.div
        className="gopher-eyes"
        variants={container}
        initial="hidden"
        animate={homeActive ? "shown" : "hidden"}
        aria-hidden="true"
      >
        <motion.div
          className="gopher-eyes__scale"
          animate={{ scale: pressed ? 0.9 : 1 }}
          transition={{ type: "spring", stiffness: 700, damping: 22 }}
        >
          <svg
            ref={svgRef}
            className="gopher-eyes__svg"
            viewBox="0 0 401.98 559.472"
            aria-hidden="true"
          >
        <g dangerouslySetInnerHTML={{ __html: GOPHER_HEAD_SVG }} />
        <g ref={leftPupil} className="gopher-eyes__pupil">
          <ellipse
            fillRule="evenodd"
            clipRule="evenodd"
            cx="131"
            cy="92"
            rx="14.829"
            ry="16.062"
          />
          <ellipse
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            cx="137.745"
            cy="95.625"
            rx="3.496"
            ry="4.082"
          />
        </g>
        <g ref={rightPupil} className="gopher-eyes__pupil">
          <ellipse
            fillRule="evenodd"
            clipRule="evenodd"
            cx="258"
            cy="87"
            rx="14.582"
            ry="16.062"
          />
          <ellipse
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            cx="264.633"
            cy="90.625"
            rx="3.438"
            ry="4.082"
          />
            </g>

            {/* Eyelids — exact eyeball outlines in body blue. Initial
                matrix = scaleY 0 (open / collapsed flat, so invisible); the
                blink engine scales them shut from the top edge. */}
            <path
              ref={leftLid}
              d={LID_PATHS[0]}
              fill={LID_BLUE}
              transform="matrix(1 0 0 0 0 0)"
            />
            <path
              ref={rightLid}
              d={LID_PATHS[1]}
              fill={LID_BLUE}
              transform="matrix(1 0 0 0 0 0)"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Transparent hit target ABOVE the card, covering the visible head, so
          clicks land on the link instead of the card behind it. */}
      <a
        className="gopher-eyes__hit"
        href="https://go.dev"
        target="_blank"
        rel="noreferrer"
        aria-label="Go — go.dev"
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        onPointerCancel={() => setPressed(false)}
      />
    </>
  );
}
