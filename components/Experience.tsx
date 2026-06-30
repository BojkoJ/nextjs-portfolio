"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { COPY, EXPERIENCE } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { reveal } from "@/lib/motion";

function ExpIcon({ kind }: { kind: "education" | "work" }) {
  if (kind === "education") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6" />
        <path d="M2 10 12 4l10 6-10 6L2 10z" />
        <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
      </svg>
    );
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export default function Experience() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const items = EXPERIENCE[language];

  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHead title={copy.experienceTitle} id="experience" />
        <div className="timeline">
          {items.map((it, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            const isWork = it.kind === "work";
            return (
              <motion.div
                key={i}
                className={
                  "tl-row tl-row--" + side + (it.current ? " current" : "")
                }
                {...reveal()}
              >
                {i === 0 && (
                  // eslint-disable-next-line @next/next/no-img-element -- fixed decorative raster
                  <img
                    className="exp-gopher"
                    src="/gopher-career.png"
                    alt=""
                    aria-hidden="true"
                  />
                )}
                <div className="tl-card-cell">
                  <div className="tl-card">
                    <div className="tl-when">
                      <span>{it.when}</span>
                    </div>
                    <h4 className="tl-role">{it.role}</h4>
                    <div className="tl-org">{it.org}</div>
                    <p className="tl-desc">{it.desc}</p>
                  </div>
                </div>
                <div className="tl-axis">
                  <div className="tl-bubble">
                    <ExpIcon kind={it.kind} />
                  </div>
                </div>
                <div className="tl-meta-cell">
                  <span className="tl-tag">
                    {isWork ? copy.expTagWork : copy.expTagEdu}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
