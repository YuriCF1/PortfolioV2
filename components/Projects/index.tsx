"use client";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/ProjectCard";
import projectsDataEn from "@/public/api/projects_en.json";
import projectsDataPt from "@/public/api/projects_pt.json";
import { ProjectCardProps } from "@/types";

const Projects = () => {
    const { i18n } = useTranslation();

    // Select projects based on current language
    const projects: ProjectCardProps[] = i18n.language === 'en' 
        ? projectsDataEn.projects 
        : projectsDataPt.projects;

    return (
        <section id="projects" className="mx-auto max-w-[80%] px-6 lg:px-12 py-20">
            <h3 className="text-4xl sm:text-2xl md:text-6xl lg:text-5xl xl:text-6xl font-mono text-[rgb(var(--foreground))] text-center mb-3">
                {i18n.language === 'en' ? "Projects" : "Projetos"}
            </h3>
            <h5 className="text-2xl font-mono text-foreground-lighter text-center mb-20 dark:text-foreground-darker">
                {i18n.language === 'en' ? "Here are some projects that I've built" : "Aqui estão alguns dos meus projetos recentes"}
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        img={project.img}
                        altImg={project.altImg}
                        techs={project.techs}
                        linkGH={project.linkGH}
                        linkDeploy={project.linkDeploy}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;