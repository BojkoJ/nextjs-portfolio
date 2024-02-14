import { links } from "./data";

export type activeSectionType = (typeof links)[number]["name"];

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type Language = "english" | "czech";

export type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};
