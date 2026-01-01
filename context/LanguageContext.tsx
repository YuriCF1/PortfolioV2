"use client"

import { createContext, useState } from "react";

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

  return (
    <LanguageContext.Provider value={{ language, languageToggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
