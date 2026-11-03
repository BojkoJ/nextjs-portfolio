"use client";

import { useLanguage } from "@/context/language-context";
import { COPY } from "@/lib/data";

// WCAG 2.4.1 (Bypass Blocks): first focusable element, jumps past the nav pills.
export default function SkipLink() {
  const { language } = useLanguage();
  return (
    <a href="#main" className="skip-link">
      {COPY[language].skipToContent}
    </a>
  );
}
