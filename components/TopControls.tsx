"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/language-context";
import { SegmentToggle } from "./ui/SegmentToggle";
import type { Lang } from "@/lib/data";

type ThemeValue = "light" | "dark";

export default function TopControls() {
  const { language, setLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount gate to avoid theme hydration mismatch
    setMounted(true);
  }, []);

  // Default to "dark" before mount to match the SSR / first-paint theme.
  const theme: ThemeValue = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <div className="top-controls">
      <SegmentToggle<Lang>
        ariaLabel="Language"
        value={language}
        onChange={setLanguage}
        items={[
          { value: "english", label: "EN", title: "English" },
          { value: "czech", label: "CZ", title: "Čeština" },
        ]}
      />
      <SegmentToggle<ThemeValue>
        ariaLabel="Theme"
        value={theme}
        onChange={setTheme}
        items={[
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ]}
      />
    </div>
  );
}
