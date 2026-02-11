"use client";

import Image from "next/image";
import styles from "./languageToggle.module.css";
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";

import EnglishImage from "@/public/images/EnglishFlag.jpg";
import PortugueseImage from "@/public/images/PortugueseFlag.jpg";

export function LanguageButton() {
  const { language, languageToggle } = useContext(LanguageContext);
  const [isFading, setIsFading] = useState(false);

  const isPortuguese = language === "portuguese";

  const handleClick = () => {
    if (isFading) return;
    setIsFading(true);

    // fade out → toggle → fade in
    setTimeout(() => {
      languageToggle();
    }, 150);

    setTimeout(() => {
      setIsFading(false);
    }, 300);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.toggleButton} ${
          isPortuguese ? styles.pt : styles.en
        }`}
        onClick={handleClick}
        aria-label="Toggle language"
      >
        <span className={styles.ball} />

        <span
          className={`${styles.flag} ${
            isFading ? styles.fadeOut : styles.fadeIn
          }`}
        >
          <Image
            src={isPortuguese ? PortugueseImage : EnglishImage}
            alt={isPortuguese ? "Portuguese" : "English"}
            width={36}
            height={26}
          />
        </span>
      </button>
    </div>
  );
}
