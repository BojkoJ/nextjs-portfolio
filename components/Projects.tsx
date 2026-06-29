"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { COPY, PROJECTS, type Copy, type Project } from "@/lib/data";
import { techHref } from "@/lib/icons";
import { SectionHead } from "./ui/SectionHead";
import { Icon } from "./ui/Icon";
import { TechIcon } from "./ui/TechIcon";
import { RichText } from "./ui/RichText";
import { reveal } from "@/lib/motion";

// Tech list — inline logo + name row, borderless.
function ProjTech({ tags }: { tags: string[] }) {
  return (
    <div className="tech-list">
      {tags.map((t) => {
        const href = techHref(t);
        const inner = (
          <>
            <span className="tech-item__icon">
              <TechIcon name={t} size={16} />
            </span>
            <span className="tech-item__label">{t}</span>
          </>
        );
        return href ? (
          <a
            key={t}
            className="tech-item tech-item--link"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {inner}
          </a>
        ) : (
          <span key={t} className="tech-item">
            {inner}
          </span>
        );
      })}
    </div>
  );
}

// Demo + Repo action row, shared between standard and featured cards.
function ProjActions({
  p,
  copy,
  size = "regular",
}: {
  p: Project;
  copy: Copy;
  size?: "regular" | "mono";
}) {
  const mono = size === "mono";
  const cls = "btn" + (mono ? " btn--mono" : "");

  let demo: React.ReactNode = null;
  if (p.demoUrl) {
    demo = (
      <a
        className={cls + " btn--primary"}
        href={p.demoUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="external" size={mono ? 13 : 14} /> {copy.btnLiveDemo}
      </a>
    );
  } else if (p.demoSoon) {
    demo = (
      <button
        className={cls + " btn--primary btn--disabled"}
        disabled
        type="button"
        title={p.demoNote || ""}
      >
        <Icon name="external" size={mono ? 13 : 14} /> {copy.btnLiveDemo}
      </button>
    );
  }

  let repo: React.ReactNode = null;
  if (p.repoUrl) {
    repo = (
      <a className={cls} href={p.repoUrl} target="_blank" rel="noreferrer">
        <Icon name="github" size={mono ? 13 : 15} /> {copy.btnRepo}
      </a>
    );
  } else if (p.closedSource) {
    repo = (
      <button
        className={cls + " btn--disabled"}
        disabled
        type="button"
        title={copy.btnRepoLockedTip}
        aria-label={copy.btnRepoLockedTip}
      >
        <Icon name="lock" size={mono ? 12 : 14} /> {copy.btnRepoLocked}
      </button>
    );
  }

  return (
    <div className="proj__actions">
      {demo}
      {repo}
      {p.demoSoon && p.demoNote ? (
        <span className="proj__demo-note">{p.demoNote}</span>
      ) : null}
    </div>
  );
}

// Featured project body — Smart Tracking System with architecture diagram.
function FeaturedArchBody({ p, copy }: { p: Project; copy: Copy }) {
  return (
    <>
      <div className="proj__body proj__body--full">
        <p className="proj__desc" style={{ maxWidth: "76ch" }}>
          <RichText text={p.description} />
        </p>

        <div className="arch-diagram">
          <span className="comment">{copy.archTopology}</span>
          {"\n"}
          {"\n"}
          <span className="label">Simulator</span>{" "}
          <span className="arrow">──gRPC──▶</span>{" "}
          <span className="label">Ingest</span>{" "}
          <span className="arrow">──NATS──▶</span>{" "}
          <span className="label">Processor</span>{" "}
          <span className="arrow">──▶</span>{" "}
          <span className="label">Postgres</span>
          {"\n"}
          {"                                                             "}
          <span className="arrow">│</span>
          {"\n"}
          <span className="label">Frontend</span>{" "}
          <span className="arrow">◀──HTTP──</span>{" "}
          <span className="label">Query</span>{" "}
          <span className="arrow">◀────────────────────┘</span>
          {"\n"}
          {"\n"}
          <span className="obs">{copy.archObservability}</span>
          {"\n"}
          <span className="obs"> traces → OTel SDK → Tempo ─┐</span>
          {"\n"}
          <span className="obs"> metrics → /metrics → Prom ─┼─▶ Grafana</span>
          {"\n"}
          <span className="obs"> logs → stdout → Loki {"     "}─┘</span>
          {"\n"}
          {"\n"}
          <span className="obs">{copy.archDelivery}</span>
          {"\n"}
          <span className="obs">
            {" "}
            git push → Tekton (test + build + push) → ArgoCD → cluster
          </span>
        </div>

        <div className="proj__featured-cols">
          <div>
            <div className="proj__section-label">{copy.highlights}</div>
            <ul className="proj__bullets proj__bullets--big">
              {p.bullets?.map((b, i) => (
                <li key={i}>
                  <span className="bullet-mark">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="proj__section-label">{copy.stackLabel}</div>
            <ProjTech tags={p.tags} />
          </div>
        </div>

        <ProjActions p={p} copy={copy} />
      </div>
    </>
  );
}

// Standard project body.
function StandardBody({ p, copy }: { p: Project; copy: Copy }) {
  return (
    <div className="proj__body">
      {p.image ? (
        <div className="proj__image-wrap">
          <div className="proj__image-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.title} loading="lazy" />
          </div>
        </div>
      ) : null}
      <div>
        <p className="proj__desc">
          <RichText text={p.description} />
        </p>
        {p.bullets ? (
          <>
            <div className="proj__section-label">{copy.highlights}</div>
            <ul className="proj__bullets">
              {p.bullets.map((b, i) => (
                <li key={i}>
                  <span className="bullet-mark">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="proj__tech">
          <div className="proj__section-label">{copy.stackLabel}</div>
          <ProjTech tags={p.tags} />
        </div>

        <ProjActions p={p} copy={copy} />
      </div>
    </div>
  );
}

function ProjectCard({ p, copy }: { p: Project; copy: Copy }) {
  const isFeatured = p.layout === "featured-arch";
  const cls = isFeatured
    ? "proj proj--full"
    : p.layout === "landscape"
      ? "proj proj--landscape"
      : p.layout === "landscape-reverse"
        ? "proj proj--landscape reverse"
        : p.layout === "wide-reverse"
          ? "proj proj--wide reverse"
          : "proj proj--wide";

  return (
    <motion.article className={cls} {...reveal()}>
      <div className="proj__head">
        <h3 className="proj__title">{p.title}</h3>
      </div>
      {isFeatured ? (
        <FeaturedArchBody p={p} copy={copy} />
      ) : (
        <StandardBody p={p} copy={copy} />
      )}
    </motion.article>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const projects = PROJECTS[language];

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHead title={copy.projectsTitle} id="projects" />
        <div className="projects-stack">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} copy={copy} />
          ))}
        </div>
      </div>
    </section>
  );
}
