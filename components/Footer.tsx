"use client";

import { useLanguage } from "@/context/language-context";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className='text-center mb-10 px-4 text-gray-500'>
      <small className='block mb-2 text-xs'>
        &copy;{" "}
        {language === "english" ? (
          <>2030 Jan. All rights reserved.</>
        ) : (
          <>2030 Jan. Všechna práva vyhrazena.</>
        )}
      </small>
      <p className='text-xs'>
        {language === "english" ? (
          <>
            <span>About this website:</span> built with React & Next.js (App
            Router & Server actions), TypeScript, Tailwindcss, Framer Motion,
            React Email & Resend, Vercel hosting.
          </>
        ) : (
          <>
            <span>O této stránce:</span> vybudováno pomocí React & Next.js (App
            Router & Server actions), TypeScript, Tailwindcss, Framer Motion,
            React Email & Resend, Vercel hosting.
          </>
        )}
      </p>
    </footer>
  );
};

export default Footer;
