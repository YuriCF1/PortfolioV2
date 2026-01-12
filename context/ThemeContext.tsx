"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light"); // estado inicial neutro
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Verifies LocalStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    // Uses the one is saved or the one that the system prefers
    if (savedTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    setMounted(true);
  }, []);

 useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    //Resets classes
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    //Saves theme in localStorage
    localStorage.setItem("theme", theme);
}, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme, mounted }), [theme, mounted, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
