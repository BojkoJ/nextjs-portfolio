"use client";

import { useLanguage } from "@/context/language-context";
import { COPY } from "@/lib/data";

export default function Footer() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__inner">
          <div>{copy.footerLine}</div>
        </div>
      </div>
    </footer>
  );
}
