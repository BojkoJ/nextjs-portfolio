"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { COPY } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Icon } from "./ui/Icon";
import { reveal } from "@/lib/motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { language } = useLanguage();
  const copy = COPY[language];

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setError(null);
    setSent(false);

    const result = await sendEmail(formData);

    setSending(false);
    if (result?.error) {
      setError(copy.formErrorMsg);
      return;
    }

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHead title={copy.contactTitle} id="contact" />

        <motion.h3 className="contact-lede" {...reveal()}>
          {copy.contactLede}{" "}
          <span className="accent">{copy.contactLedeAccent}</span>
        </motion.h3>
        <motion.p className="contact-lede-sub" {...reveal(0.06)}>
          {copy.contactLedeSub}
        </motion.p>
        <motion.p className="contact-direct" {...reveal(0.1)}>
          {copy.contactDirect}{" "}
          <a href="mailto:honzabojko@seznam.cz">honzabojko@seznam.cz</a>
        </motion.p>

        <motion.div className="contact-grid" {...reveal(0.14)}>
          <div className="contact-channels">
            <a href="mailto:honzabojko@seznam.cz">
              <span className="label">email</span>
              <span className="val">honzabojko@seznam.cz</span>
            </a>
            <a
              href="https://github.com/BojkoJ"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">github</span>
              <span className="val">github.com/BojkoJ</span>
            </a>
            <a
              href="https://linkedin.com/in/jan-bojko/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">linkedin</span>
              <span className="val">jan-bojko</span>
            </a>
            <a href="/CV.pdf" download>
              <span className="label">résumé</span>
              <span className="val">{copy.cvChannel}</span>
            </a>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="cf-email">
                {copy.contactForm.emailLabel}
                <span className="req">*</span>
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                maxLength={250}
                placeholder={copy.contactForm.emailPh}
              />
            </div>
            <div className="field field--grow">
              <label htmlFor="cf-msg">
                {copy.contactForm.messageLabel}
                <span className="req">*</span>
              </label>
              <textarea
                id="cf-msg"
                name="message"
                required
                maxLength={5000}
                placeholder={copy.contactForm.messagePh}
              />
            </div>
            <button
              type="submit"
              className="btn btn--primary form-submit"
              disabled={sending}
            >
              {sending ? copy.formSending : copy.contactForm.submit}
              <Icon name="send" size={14} />
            </button>
            {sent ? (
              <div className="form-sent">✓ {copy.formSentMsg}</div>
            ) : null}
            {error ? <div className="form-error">{error}</div> : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
