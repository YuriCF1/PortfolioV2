"use client"

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
            <header className="dark:border-gray-700 py-6 px-35 border-gray-200 flex justify-between items-center text-2xl fixed top-0 w-full z-10 bg-white/30 dark:bg-white-200/30 backdrop-blur-sm">
      <h1 className="dark:text-light-color text-3xl font-bold text-gray-900 text-center font-jost">
        {/* Yuri Cruz - Full Stack Developer */}
        Portfolio
      </h1>
      <ul className="flex gap-4 font-jost justify-content-center">
        <li className="cursor-pointer hover:bg-gray-200 p-2 rounded-xl"> {language === "english" ? "Home" : "Início"} </li>
        <li className="cursor-pointer hover:bg-gray-200 p-2 rounded-xl"> {language === "english" ? "Skills" : "Habilidades"} </li>
        <li className="cursor-pointer hover:bg-gray-200 p-2 rounded-xl"> {language === "english" ? "Projects" : "Projetos"} </li>
        <li className="cursor-pointer hover:bg-gray-200 p-2 rounded-xl"> {language === "english" ? "Contact" : "Contato"} </li>
      </ul>   
    </header>
  );
};

export default Header;