"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import {
  COPY,
  CERTIFICATES,
  type Certificate,
  type CertCompany,
  type CertSkill,
  type Copy,
} from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Icon, type IconName } from "./ui/Icon";
import { TechIcon } from "./ui/TechIcon";
import { slideIn } from "@/lib/motion";

// Conceptual skills (SQL, networking, …) get a quiet line glyph; C#/.NET keeps
// its real brand mark so it stays recognisable.
const SKILL_GLYPH: Record<Exclude<CertSkill["icon"], "dotnet">, IconName> = {
  sql: "database",
  "database-design": "schema",
  networking: "network",
  it: "monitor",
};

// Same treatment as the project stack (ProjTech): borderless inline icon + name.
function SkillBadge({ skill }: { skill: CertSkill }) {
  return (
    <span className="tech-item">
      <span className="tech-item__icon">
        {skill.icon === "dotnet" ? (
          <TechIcon name="C#/.Net" size={16} />
        ) : (
          <Icon name={SKILL_GLYPH[skill.icon]} size={16} stroke={1.7} />
        )}
      </span>
      <span className="tech-item__label">{skill.label}</span>
    </span>
  );
}

const LOGO_SRC: Record<CertCompany, string> = {
  oracle: "/certs/logos/oracle.png",
  cisco: "/certs/logos/cisco.png",
  ecdl: "/certs/logos/ecdl.png",
};

function CompanyLogo({
  company,
  name,
}: {
  company: CertCompany;
  name: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small brand mark, no layout/LCP benefit from next/image
    <img className="cert-logo" src={LOGO_SRC[company]} alt={name} />
  );
}

function CertRow({
  cert,
  copy,
  index,
  onOpen,
}: {
  cert: Certificate;
  copy: Copy;
  index: number;
  onOpen: (c: Certificate) => void;
}) {
  return (
    // Even rows show the preview on the left, odd rows on the right (CSS
    // nth-child(even) flips the frame's order); glide each in from its side.
    <motion.article
      className="cert-row"
      {...slideIn(index % 2 === 0 ? "left" : "right")}
    >
      <button
        type="button"
        className="cert-frame"
        onClick={() => onOpen(cert)}
        aria-label={`${copy.certView}: ${cert.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- preview is a pre-rendered, already-optimised raster */}
        <img
          className="cert-frame__shot"
          src={cert.preview}
          alt={cert.title}
          loading="lazy"
          decoding="async"
        />
        <span className="cert-frame__veil" aria-hidden="true">
          <span className="cert-frame__cue">
            <Icon name="expand" size={17} stroke={1.8} />
          </span>
        </span>
      </button>

      <div className="cert-row__body">
        <div className="cert-row__date mono">{cert.date}</div>
        <h3 className="cert-row__title">{cert.title}</h3>

        <div className="cert-row__issuer">
          <CompanyLogo company={cert.companyIcon} name={cert.company} />
        </div>

        <div className="tech-list cert-row__skills">
          {cert.skills.map((s) => (
            <SkillBadge key={s.icon + s.label} skill={s} />
          ))}
        </div>

        <button
          type="button"
          className="cert-row__view"
          onClick={() => onOpen(cert)}
        >
          {copy.certView}
          <Icon name="arrow-up-right" size={13} />
        </button>
      </div>
    </motion.article>
  );
}

function Lightbox({
  cert,
  copy,
  onClose,
}: {
  cert: Certificate;
  copy: Copy;
  onClose: () => void;
}) {
  const [pdfReady, setPdfReady] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="cert-lb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <motion.div
        className="cert-lb__panel"
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cert-lb__head">
          <div className="cert-lb__heading">
            <span className="cert-lb__date mono">{cert.date}</span>
            <h3 className="cert-lb__title">{cert.title}</h3>
          </div>
          <button
            type="button"
            className="cert-lb__close"
            onClick={onClose}
            aria-label="Close"
          >
            <Icon name="x" size={18} stroke={1.9} />
          </button>
        </div>

        <div className="cert-lb__stage">
          {/* Crisp preview shows instantly, then the live PDF fades in over it. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- placeholder under the PDF while it loads */}
          <img className="cert-lb__shot" src={cert.preview} alt="" aria-hidden="true" />
          <iframe
            className="cert-lb__pdf"
            src={`${cert.file}#toolbar=0&navpanes=0&statusbar=0&view=Fit`}
            title={cert.title}
            onLoad={() => setPdfReady(true)}
            style={{ opacity: pdfReady ? 1 : 0 }}
          />
        </div>

        <div className="cert-lb__foot">
          <div className="cert-lb__issuer">
            <CompanyLogo company={cert.companyIcon} name={cert.company} />
          </div>
          <div className="tech-list cert-lb__skills">
            {cert.skills.map((s) => (
              <SkillBadge key={s.icon + s.label} skill={s} />
            ))}
          </div>
          <div className="cert-lb__actions">
            <a
              className="btn btn--mono"
              href={cert.file}
              target="_blank"
              rel="noreferrer"
            >
              {copy.certOpen}
              <Icon name="external" size={13} />
            </a>
            <a className="btn btn--mono" href={cert.file} download>
              {copy.certDownload}
              <Icon name="download" size={13} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const items = CERTIFICATES[language];
  const [open, setOpen] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section">
      <div className="shell">
        <SectionHead title={copy.certsTitle} id="certificates" />
        <div className="cert-list">
          {items.map((cert, i) => (
            <CertRow
              key={cert.slug}
              cert={cert}
              copy={copy}
              index={i}
              onOpen={setOpen}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Lightbox cert={open} copy={copy} onClose={() => setOpen(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
