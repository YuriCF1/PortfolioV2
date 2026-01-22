'use client';

import { FaCodeBranch, FaChartLine, FaAward } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import StatCard from "../StatCard";

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <section className="py-40 text-xl" id="about">
            <div className="mx-auto max-w-[90%] px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Text block */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-semibold text-[rgb(var(--foreground))]">
                            {t("about.title")}
                        </h2>

                        <p className="text-[rgb(var(--foreground)/0.7)] leading-relaxed">
                            {t("about.description1")}
                        </p>

                        <p className="text-[rgb(var(--foreground)/0.7)] leading-relaxed">
                            {t("about.description2")}
                        </p>

                        <p className="text-[rgb(var(--foreground)/0.7)] leading-relaxed">
                            {t("about.description3")}
                        </p>

                        <div className="pt-6">
                            <h4 className="text-[rgb(var(--foreground))] font-medium mb-3">
                                {t("about.values_title")}
                            </h4>
                            <ul className="list-disc list-inside text-[rgb(var(--foreground)/0.7)] space-y-2">
                                <li>{t("about.values.clean_code")}</li>
                                <li>{t("about.values.performance")}</li>
                                <li>{t("about.values.ux")}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Stats block - To be updated*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <StatCard
                            icon={<FaCodeBranch />}
                            value="70+"
                            label={t("about.stats.projects")}
                        />

                        <StatCard
                            icon={<FaChartLine />}
                            value="3.5+"
                            label={t("about.stats.experience")}
                        />

                        <StatCard
                            icon={<FaAward />}
                            value="60+"
                            label={t("about.stats.courses")}
                        />

                        <StatCard
                            icon={<GiTechnoHeart />}
                            value="10+"
                            label={t("about.stats.technologies")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;