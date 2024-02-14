"use client";

import { Language, LanguageContextType } from "@/lib/types";
import React, { useEffect, useState, createContext, useContext } from "react";

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: React.PropsWithChildren) {
  const [language, setLanguage] = useState<Language>("english");

  const toggleLanguage = () => {
    if (language === "czech") {
      setLanguage("english");
      window.localStorage.setItem("language", "english");
    } else {
      setLanguage("czech");
      window.localStorage.setItem("language", "czech");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useTheme must be used within a LanguageContextProvider");
  }

  return context;
}
