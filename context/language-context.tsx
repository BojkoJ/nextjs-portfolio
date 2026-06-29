"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/data";

type LanguageContextValue = {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "portfolio-lang";

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Always start at "english" so the server and first client render match;
  // the stored preference is applied after mount.
  const [language, setLanguageState] = useState<Lang>("english");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- apply persisted preference after mount
    if (stored === "english" || stored === "czech") setLanguageState(stored);
  }, []);

  const setLanguage = (lang: Lang) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
  };

  const toggleLanguage = () =>
    setLanguage(language === "english" ? "czech" : "english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageContextProvider");
  }
  return ctx;
}
