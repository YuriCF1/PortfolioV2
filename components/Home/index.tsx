"use client";

import { HiArrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";


const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="px-10 lg:px-35 flex flex-col gap-4 sm:gap-6">
            <h1 className="
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  font-bold
  leading-[1.3] sm:leading-[1.35] md:leading-[1.4]

  /* MOBILE */
  bg-[linear-gradient(45deg,#000_10%,#6b7280_45%,#9ca3af_70%)]

  /* DESKTOP */
  sm:bg-[linear-gradient(45deg,#000_1%,#9ca3af_35%,#e5e7eb_80%)]

  bg-clip-text text-transparent
">
                Yuri Cruz
                <br />
                <span className="block mt-1 text-xl sm:text-2xl md:text-3xl bg-[linear-gradient(45deg,#030a12_0%,#bdbdbd_65%)] sm:bg-[linear-gradient(45deg,#030a12_0%,#575f69_70%,#bdbdbd_85%)] md:bg-[linear-gradient(45deg,#030a12_10%,#575f69_20%,#bdbdbd_80%)] bg-clip-text text-transparent">
                    Full Stack Developer
                </span>
            </h1>
            <div className="h-0.5 w-32 sm:h-1  sm:w-44 md:w-55 lg:w-100 bg-gray-400 rounded-full" />
            <p className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[65%] leading-relaxed text-gray-700">
                {t("nav.about")}
            </p>
            <div className="mt-6 flex gap-4">
                <div className="group flex px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <a href="#projects" className="flex items-center gap-1">
                        {t("nav.my_projects")}
                        <HiArrowRight
                            className="
          text-xl text-white
          transition-transform
          group-hover:translate-x-1
        "
                        />
                    </a>
                </div>

                <a
                    href="#contact"
                    className="
      group px-4 py-2 border border-gray-300 text-gray-700 rounded-lg
      hover:bg-gray-50 transition-colors
      flex items-center gap-1
    "
                >
                    {t("nav.get_in_touch")}
                    <HiArrowRight
                        className="
        text-xl text-gray-400
        transition-transform
        group-hover:translate-x-1
      "
                    />
                </a>
            </div>

        </div>
    )
}

export default Home