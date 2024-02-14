"use client";

import type { activeSectionType } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextType = {
  activeSection: activeSectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<activeSectionType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const activeSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// vytvoření provideru
export default function ActiveSectionContextProvider({
  children,
}: React.PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<activeSectionType>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); // použijeme pro vypnutí přepínání aktivního navitemu pomocí scrollování
  // na vteřinu to v Ifu vypneme

  return (
    <activeSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </activeSectionContext.Provider>
  );
}

// custom hook pro zpracování contextu
export function useActiveSectionContext() {
  const context = useContext(activeSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
