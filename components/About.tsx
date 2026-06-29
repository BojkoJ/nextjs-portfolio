"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { COPY } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { RichText } from "./ui/RichText";
import { reveal } from "@/lib/motion";

export default function About() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHead title={copy.aboutTitle} id="about" />
        <div className="about-body about-body--solo">
          {copy.aboutCopy.map((p, i) => (
            <motion.p key={i} {...reveal(i * 0.06)}>
              <RichText text={p} />
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
