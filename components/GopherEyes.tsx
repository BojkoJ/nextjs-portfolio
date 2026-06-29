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

export default function GopherEyes() {
  const homeActive = useActiveSection(SECTION_IDS) === "home";
  const [pressed, setPressed] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const leftPupil = useRef<SVGGElement>(null);
  const rightPupil = useRef<SVGGElement>(null);

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
