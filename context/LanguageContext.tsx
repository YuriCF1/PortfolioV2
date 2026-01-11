"use client"

import { createContext, useState } from "react";
import i18n from "@/i18n";
import { useEffect } from "react";

interface LanguageContextType {
  language: string;
  languageToggle: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'english',
  languageToggle: () => {},
});

export function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('english');
  const languageToggle = () =>
    setLanguage((prev) => (prev === 'english' ? 'portuguese' : 'english'));

  useEffect(() => {
    i18n.changeLanguage(language === "english" ? "en" : "pt");
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, languageToggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
