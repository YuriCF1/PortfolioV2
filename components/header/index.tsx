"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "@/components/LanguageToggle";
import ToggleLightDarkMode from "@/components/ToggleLightDarkMode";

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navItems = [
    "nav.home",
    "nav.skills",
    "nav.projects",
    "nav.contact",
  ];

  return (
    <header className="
  fixed top-0 w-full z-50
  backdrop-blur-sm
  border-b border-[rgb(var(--foreground)/.1)]
">

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center">
        {/* Title */}
        <div className="flex items-center">
          <h1 className="text-xl sm:text-4xl font-medium">
            {t("nav.title")}
          </h1>
          <ToggleLightDarkMode />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 ml-auto md:gap-6 lg:gap-10 xl:gap-14">
          <ul className="flex gap-2 lg:gap-4 text-base">
            {navItems.map((key) => (
              <li
                key={key}
                className="
                  cursor-pointer px-3 py-2 rounded-xl transition
                  hover:bg-gray-200 dark:hover:bg-gray-800
                "
              >
                {t(key)}
              </li>
            ))}
          </ul>
          <LanguageButton />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <LanguageButton />

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="
              p-2 rounded-lg transition
              hover:bg-gray-200 dark:hover:bg-gray-800
            "
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <ul className="
          md:hidden px-4 pb-4 flex flex-col gap-2
          bg-white/90 dark:bg-gray-900/90
          backdrop-blur-sm
        ">
          {navItems.map((key) => (
            <li
              key={key}
              onClick={() => setOpen(false)}
              className="
                cursor-pointer px-3 py-2 rounded-xl transition
                hover:bg-gray-200 dark:hover:bg-gray-800
              "
            >
              {t(key)}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
