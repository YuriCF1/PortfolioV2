"use client";

import { useContext, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { LanguageButton } from "@/components/LanguageToggle";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-white/70 backdrop-blur-sm
        border-b border-gray-200
      "
    >
      <div
        className="
          max-w-10xl mx-auto
          px-4 sm:px-6 lg:px-10
          py-4
          flex items-center
        "
      >
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-medium">
          Portfolio
        </h1>

        {/* Desktop right side */}
        <div
          className="
            hidden md:flex items-center gap-4
            ml-auto
            md:gap-6 lg:gap-10 xl:gap-14
          "
        >
          <ul className="flex gap-2 lg:gap-4 text-base">
            {[
              ["Home", "Início"],
              ["Skills", "Habilidades"],
              ["Projects", "Projetos"],
              ["Contact", "Contato"],
            ].map(([en, pt]) => (
              <li
                key={en}
                className="cursor-pointer px-3 py-2 rounded-xl hover:bg-gray-200 transition"
              >
                {language === "english" ? en : pt}
              </li>
            ))}
          </ul>

          <LanguageButton />
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <LanguageButton />

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-200"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul
          className="
            md:hidden
            px-4 pb-4
            flex flex-col gap-2
            bg-white/90 backdrop-blur-sm
          "
        >
          {[
            ["Home", "Início"],
            ["Skills", "Habilidades"],
            ["Projects", "Projetos"],
            ["Contact", "Contato"],
          ].map(([en, pt]) => (
            <li
              key={en}
              onClick={() => setOpen(false)}
              className="cursor-pointer px-3 py-2 rounded-xl hover:bg-gray-200 transition"
            >
              {language === "english" ? en : pt}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
