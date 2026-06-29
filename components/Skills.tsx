"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { COPY, SKILLS } from "@/lib/data";
import { techHref } from "@/lib/icons";
import { SectionHead } from "./ui/SectionHead";
import { TechIcon } from "./ui/TechIcon";
import { reveal } from "@/lib/motion";

export default function Skills() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const cats = SKILLS[language];

  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHead title={copy.skillsTitle} id="skills" />
        <div className="skills-grid">
          {/* Decorative: the stack as a gopher steam train, riding the
              separator line above the grid like a rail. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed decorative raster */}
          <img
            className="stack-train"
            src="/gopher-train.png"
            alt=""
            aria-hidden="true"
          />
          {cats.map((c, i) => (
            <motion.div key={i} {...reveal(i * 0.05)}>
              <div className="skills-cat__head">
                <span>{c.cat}</span>
                <span className="count">
                  {String(c.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="skills-list">
                {c.items.map((it) => {
                  const href = techHref(it);
                  return (
                    <li key={it}>
                      <span className="skill-ico">
                        <TechIcon name={it} size={16} />
                      </span>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="skills-link"
                        >
                          {it}
                        </a>
                      ) : (
                        <span>{it}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
