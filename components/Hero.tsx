"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import { COPY, buildYaml, type Copy, type Lang } from "@/lib/data";
import { Icon } from "./ui/Icon";
import GopherPeek from "./GopherPeek";
import GopherEyes from "./GopherEyes";
import { smoothScrollTo } from "@/lib/scroll";
import { entrance } from "@/lib/motion";

function HeroYaml({ copy, lang }: { copy: Copy; lang: Lang }) {
  const lines = useMemo(() => buildYaml(lang), [lang]);
  return (
    <motion.div className="hero__yaml" {...entrance(0.25, 24)}>
      <div className="hero__yaml-head">
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="dot" />
          <span className="mono">{copy.hero.yamlPath}</span>
        </span>
      </div>
      <div className="hero__yaml-body">
        <div className="hero__yaml-gutter">
          {lines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="hero__yaml-code">
          {lines.map((line, i) => (
            <span
              key={i}
              className="line"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <section id="home" className="hero">
      <div className="shell">
        <div className="hero__grid">
          <div>
            <motion.h1 className="hero__display" {...entrance(0)}>
              {copy.hero.displayPre}
              <br />
              <span className="accent-mark">{copy.hero.displayKey}</span>{" "}
              <span>{copy.hero.displayPost}</span>
            </motion.h1>

            <motion.p className="hero__lede" {...entrance(0.1)}>
              {copy.hero.lede1} <strong>{copy.hero.ledeStrong}</strong>{" "}
              {copy.hero.lede2} <strong>{copy.hero.ledeStrong2}</strong>{" "}
              {copy.hero.lede3}
            </motion.p>

            <motion.div className="hero__panel-actions" {...entrance(0.18)}>
              <a
                href="#contact"
                className="btn btn--primary"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("contact");
                }}
              >
                {copy.hero.cta}
                <Icon name="arrow-right" size={15} />
              </a>
              <a href="/CV.pdf" download className="btn">
                {copy.hero.ctaAlt}
                <Icon name="download" size={15} />
              </a>
              <span className="spacer" />
              <a
                className="icon-link icon-link--big"
                href="https://github.com/BojkoJ"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" size={20} />
              </a>
              <a
                className="icon-link icon-link--big"
                href="https://linkedin.com/in/jan-bojko/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={20} />
              </a>
              <a
                className="icon-link icon-link--big"
                href="mailto:honzabojko@seznam.cz"
                aria-label="Email"
              >
                <Icon name="mail" size={20} />
              </a>
            </motion.div>
          </div>

          <div className="hero__yaml-wrap">
            <GopherEyes />
            <HeroYaml copy={copy} lang={language} />
            <GopherPeek />
          </div>
        </div>

        <motion.dl className="hero__meta" {...entrance(0.3)}>
          {copy.hero.meta.map((m, i) => (
            <div key={i}>
              <dt>{m.label}</dt>
              <dd>
                {m.value}
                <br />
                <span className="mono">{m.sub}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
