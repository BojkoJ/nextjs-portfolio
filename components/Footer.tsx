"use client";

import { useLanguage } from "@/context/language-context";
import { COPY } from "@/lib/data";

// External attribution link — muted, underline-free, matches footer styling.
function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Footer() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__inner">
          <div className="footer__line">{copy.footerLine}</div>

          <div className="footer__legal">
            {/* Required CC BY 3.0 attribution for the Go gopher vector (author +
                licence + "modified"), plus courtesy credits for the CC0 pack and
                the icon source. */}
            <p className="footer__credits">
              {copy.footerArtwork}: Go Gopher —{" "}
              <Cite href="https://go.dev/blog/gopher">Renée French</Cite> (
              <Cite href="https://creativecommons.org/licenses/by/4.0/">
                CC BY 4.0
              </Cite>
              ) · {copy.footerVector}:{" "}
              <Cite href="https://github.com/golang-samples/gopher-vector">
                Takuya Ueda
              </Cite>{" "}
              (
              <Cite href="https://creativecommons.org/licenses/by/3.0/">
                CC BY 3.0
              </Cite>
              , {copy.footerModified}) ·{" "}
              <Cite href="https://github.com/MariaLetta/free-gophers-pack">
                MariaLetta
              </Cite>{" "}
              (CC0) · {copy.footerIcons}:{" "}
              <Cite href="https://svgl.app">svgl.app</Cite> · {copy.footerTrain}{" "}
              <Cite href="https://gemini.google/overview/image-generation/">
                Google Gemini (Nano Banana Pro)
              </Cite>
            </p>

            {/* Trademark notice covering the tech logos and certificate issuers
                (Oracle, Cisco, ECDL) — nominative use, no endorsement implied. */}
            <p className="footer__trademark">{copy.footerTrademark}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
