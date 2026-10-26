"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { PRIVACY } from "@/lib/privacy";
import { PRIVACY_UPDATED } from "@/lib/legal";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const doc = PRIVACY[language];

  return (
    <main className="section privacy">
      <div className="shell">
        <Link href="/" className="privacy__back">
          {doc.back}
        </Link>

        <h1 className="section-head__title privacy__title">{doc.title}</h1>
        <p className="privacy__meta">
          {doc.updatedLabel}: {PRIVACY_UPDATED}
        </p>
        <p className="privacy__intro">{doc.intro}</p>

        {doc.sections.map((s) => (
          <section key={s.heading} className="privacy__section">
            <h2>{s.heading}</h2>
            {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
            {s.items ? (
              <ul>
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            ) : null}
            {s.after?.map((p) => <p key={p}>{p}</p>)}
          </section>
        ))}
      </div>
    </main>
  );
}
