"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/lib/hooks";
import { SECTION_IDS } from "@/lib/data";

// A Go "Gopher" mascot that hides behind the about.yaml card (the "wall") and
// peeks out from its right edge. It animates in ("hidden" -> "peek") while the
// Home section is active and tucks back behind the card ("hidden") with the same
// animation the moment the user scrolls past Home (i.e. when the active nav item
// changes away from Home). It ducks back + looks startled ("startled") when the
// cursor enters ONLY the visible (non-hidden) part of it.
//
// Hover is driven by a stationary, invisible hotspot positioned over the
// protruding strip rather than by the gopher element itself. Because the hotspot
// doesn't move, the gopher can duck away without sliding out from under the
// cursor (which would otherwise cause hover flicker).
//
// Two faces are stacked and cross-faded: a calm/curious face while peeking and a
// wide-eyed startled face the instant it's spooked. Assets are CC0 from the
// free-gophers-pack (MariaLetta).

const SPRING = { type: "spring", stiffness: 240, damping: 17 } as const;

const body: Variants = {
  // Tucked behind the card. Same spring as the peek so scrolling away hides it
  // with the mirror of the reveal; no delay so it ducks immediately on scroll.
  hidden: { x: 24, y: 28, rotate: 22, opacity: 0, transition: SPRING },
  // delay lets the about.yaml card settle first on load / before peeking back.
  peek: { x: 0, y: 0, rotate: 13, opacity: 1, transition: { ...SPRING, delay: 0.65 } },
  startled: {
    x: -30,
    y: 16,
    rotate: 2,
    opacity: 1,
    transition: { type: "spring", stiffness: 520, damping: 20 },
  },
};

const calmFace: Variants = {
  hidden: { opacity: 1 },
  peek: { opacity: 1 },
  startled: { opacity: 0, transition: { duration: 0.06 } },
};

const startledFace: Variants = {
  hidden: { opacity: 0 },
  peek: { opacity: 0 },
  startled: { opacity: 1, transition: { duration: 0.06 } },
};

export default function GopherPeek() {
  const [spooked, setSpooked] = useState(false);
  // In perfect sync with the nav scroll-spy: peek only while Home is active.
  const homeActive = useActiveSection(SECTION_IDS) === "home";

  // Scrolling fires no mouseleave, so a hover started right before scrolling
  // away would latch `spooked` and make the gopher return as "startled" instead
  // of "peek". Clear it whenever we leave Home.
  useEffect(() => {
    if (!homeActive && spooked) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reset latched hover when leaving Home
      setSpooked(false);
    }
  }, [homeActive, spooked]);

  // Away from Home (scrolled past) OR hovered -> startled: ducked behind the
  // card with the scared face, exactly like the hover state. Arriving at Home
  // (and not hovered) springs it back to the default peek. The first page-load
  // reveal still runs from "hidden".
  const state = homeActive && !spooked ? "peek" : "startled";

  return (
    <>
      <motion.div
        className="gopher-peek"
        variants={body}
        initial="hidden"
        animate={state}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static decorative SVG, no layout/LCP benefit from next/image */}
        <motion.img
          className="gopher-peek__face"
          src="/gopher/peek.svg"
          alt=""
          variants={calmFace}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- static decorative SVG, no layout/LCP benefit from next/image */}
        <motion.img
          className="gopher-peek__face"
          src="/gopher/startled.svg"
          alt=""
          variants={startledFace}
        />
      </motion.div>

      <div
        className="gopher-peek__hit"
        aria-hidden="true"
        onMouseEnter={() => setSpooked(true)}
        onMouseLeave={() => setSpooked(false)}
      />
    </>
  );
}
