"use client";

import { HiArrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="testBackground px-10 py-24 lg:px-20 flex flex-col gap-4 sm:gap-6" id="home">
            <h1
                className="
    inline-block

    dark:bg-[radial-gradient(circle_at_bottom_right,#00FFDE_40%,#4ade80_85%,#00FFDE_100%)]
bg-[radial-gradient(circle_at_bottom_right,#00FFDE_40%,#166534_85%,#007A6C_100%)]

    bg-clip-text
    text-transparent
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    leading-[1.3] sm:leading-[1.35] md:leading-[1.4]
  "
            >

                Yuri Cruz
                <br />
                <span className="block mt-1 text-xl sm:text-2xl md:text-3xl">
                    Full Stack Developer
                </span>
            </h1>

            {/* Divider */}
            <div className="h-0.5 w-32 sm:h-1 sm:w-44 md:w-55 lg:w-100 bg-[rgb(var(--foreground)/0.3)] rounded-full" />

            {/* Text */}
            <p className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[65%] leading-relaxed text-[rgb(var(--foreground)/0.8)]">
                {t("nav.about")}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
                <a
                    href="#projects"
                    className="
            group flex items-center gap-1
            px-4 py-2 rounded-lg transition-colors

            bg-[rgb(var(--foreground))]
            text-[rgb(var(--background))]

            hover:bg-[rgb(var(--foreground)/0.85)]
          "
                >
                    {t("nav.my_projects")}
                    <HiArrowRight
                        className="
              text-xl
              transition-transform
              group-hover:translate-x-1
            "
                    />
                </a>

                <a
                    href="#contact"
                    className="
            group flex items-center gap-1
            px-4 py-2 rounded-lg transition-colors

            border border-[rgb(var(--foreground)/0.25)]
            text-[rgb(var(--foreground)/0.8)]

            hover:bg-[rgb(var(--foreground)/0.05)]
          "
                >
                    {t("nav.get_in_touch")}
                    <HiArrowRight
                        className="
              text-xl text-[rgb(var(--foreground)/0.6)]
              transition-transform
              group-hover:translate-x-1
            "
                    />
                </a>
            </div>
            <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/yuricf/"
                    target="_blank"
                    className="
      group flex h-12 w-12 items-center justify-center rounded-xl

      /* LIGHT */
      bg-black/5
      hover:bg-black/10

      /* DARK */
      dark:bg-white/5
      dark:hover:bg-white/10

      border border-black/10 dark:border-white/10
      transition
    "
                >
                    <FaLinkedinIn
                        className="
        text-xl
        text-[rgb(var(--foreground)/0.8)]
        dark:text-white
        group-hover:scale-110
        transition
      "
                    />
                </a>
                {/* GitHub */}
                <a
                    href="https://github.com/YuriCF1"
                    target="_blank"
                    className="
      group flex h-12 w-12 items-center justify-center rounded-xl

      /* LIGHT */
      bg-black/5
      hover:bg-black/10

      /* DARK */
      dark:bg-white/5
      dark:hover:bg-white/10

      border border-black/10 dark:border-white/10
      transition
    "
                >
                    <FaGithub
                        className="
        text-xl
        text-[rgb(var(--foreground)/0.8)]
        dark:text-white
        group-hover:scale-110
        transition
      "
                    />
                </a>
                {/* Email */}
                <a
                    href="mailto:yurifdev@gmail.com"
                    className="
      group flex h-12 w-12 items-center justify-center rounded-xl

      /* LIGHT */
      bg-black/5
      hover:bg-black/10

      /* DARK */
      dark:bg-white/5
      dark:hover:bg-white/10

      border border-black/10 dark:border-white/10
      transition
    "
                >
                    <HiOutlineMail
                        className="
        text-xl
        text-[rgb(var(--foreground)/0.8)]
        dark:text-white
        group-hover:scale-110
        transition
      "
                    />
                </a>

            </div>
        </div>
    );
};

export default Home;
