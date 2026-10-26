"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { LINKS, SECTION_IDS } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks";
import { smoothScrollTo } from "@/lib/scroll";

export default function HeaderPill() {
  const { language } = useLanguage();
  const links = LINKS[language];
  const active = useActiveSection(SECTION_IDS);
  // On sub-pages (e.g. /privacy) the section anchors live on the home page.
  const onHome = usePathname() === "/";

  const onClick = (e: React.MouseEvent, hash: string) => {
    if (!onHome) return; // let the browser navigate to "/#section"
    e.preventDefault();
    const id = hash.slice(1).toLowerCase();
    smoothScrollTo(id);
    if (typeof history !== "undefined" && history.pushState) {
      history.pushState(null, "", hash);
    }
  };

  return (
    <div className="header-pill-wrap">
      <nav className="header-pill" aria-label="Primary">
        {links.map((l) => {
          const id = l.hash.slice(1).toLowerCase();
          const isActive = onHome && active === id;
          return (
            <a
              key={l.hash}
              href={onHome ? l.hash : `/${l.hash}`}
              onClick={(e) => onClick(e, l.hash)}
              className={"header-pill__item" + (isActive ? " active" : "")}
            >
              {isActive && (
                <motion.span
                  layoutId="header-pill-indicator"
                  className="header-pill__indicator"
                  style={{ position: "absolute", inset: 0, zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  aria-hidden
                />
              )}
              <span>{l.desc.toLowerCase()}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
