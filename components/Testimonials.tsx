"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { COPY, TESTIMONIALS } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Icon } from "./ui/Icon";
import { reveal } from "@/lib/motion";

export default function Testimonials() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const items = TESTIMONIALS[language];

  return (
    <section id="testimonials" className="section">
      <div className="shell">
        <SectionHead title={copy.testimonialsTitle} id="testimonials" />
        <div className="test-grid">
          {items.map((t, i) => (
            <motion.article key={i} className="testimonial" {...reveal(i * 0.08)}>
              <p className="testimonial__quote">
                <span className="qmark">&ldquo;</span>
                {t.quote}
              </p>
              <div className="testimonial__meta">
                <div className="testimonial__person">
                  {t.person}
                  <span className="role">{t.role}</span>
                </div>
                <a
                  className="testimonial__project"
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.project} <Icon name="arrow-up-right" size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
