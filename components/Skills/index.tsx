"use client";
import { useTranslation } from "react-i18next";

// Icons
import { FaCode } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { LuRocket } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { SiJira } from "react-icons/si";

// Components
import SkillsCard from "@/components/SkillsCard";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="mx-auto max-w-[80%] px-6 lg:px-12">
      <h3 className="text-6xl font-mono text-[rgb(var(--foreground))] text-center mb-3" >{t("skills.title")}</h3>
      <h5 className="text-2xl font-mono text-[rgb(var(--foreground-lighter))] text-center mb-20">{t("skills.subtitle")}</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-18">
        <SkillsCard iconColor="blue" icon={<FaCode />} title={t("skills.frontend.title")} description={t("skills.frontend.description")} />
        <SkillsCard iconColor="green" icon={<SiDatabricks />} title={t("skills.backend.title")} description={t("skills.backend.description")} />
        <SkillsCard iconColor="purple" icon={<LuRocket />} title={t("skills.devops.title")} description={t("skills.devops.description")} />
        <SkillsCard iconColor="pink" icon={<MdOutlineDesignServices />} title={t("skills.design.title")} description={t("skills.design.description")} />
        <SkillsCard iconColor="red" icon={<GoShieldCheck />} title={t("skills.security.title")} description={t("skills.security.description")} />
        <SkillsCard iconColor="orange" icon={<SiJira />} title={t("skills.agile.title")} description={t("skills.agile.description")} />
      </div>
    </section>
  )
}

export default Skills