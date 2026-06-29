"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import LanguageContextProvider from "@/context/language-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageContextProvider>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LanguageContextProvider>
    </ThemeProvider>
  );
}
