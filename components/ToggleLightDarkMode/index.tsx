"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ToggleLightDarkMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="
    ml-px
    mt-[-3px]
    sm:mt-[-3px]
    md:mt-[-3px]
    lg:mt-[-3px]
    xl:mt-[-3px]
    w-5 h-5 sm:w-2 sm:h-2 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8
    flex items-center justify-center
    rounded-full
    border-4
    cursor-pointer
    border-gray-800 dark:border-gray-200
    hover:bg-gray-800 dark:hover:bg-gray-200
    hover:scale-110
    transition-all
    duration-300
    ease-in-out
  "
    >
      {theme === "light" ? (
        <HiSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <HiMoon className="w-6 h-6 text-indigo-300" />
      )}
    </button>

  );
}