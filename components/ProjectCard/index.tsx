"use client";
import Image from "next/image";
import { ProjectCardProps } from "@/types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const ProjectCard = ({
    title,
    description,
    img,
    altImg,
    techs,
    linkGH,
    linkDeploy
}: ProjectCardProps) => {

    const { t } = useTranslation();
    
    
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Imagem do projeto */}
            <div className="h-48 overflow-hidden">
                <Image
                    src={img}
                    alt={altImg}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Conteúdo do card - ocupa o espaço restante */}
            <div className="p-6 grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {description}
                </p>

                {/* Tecnologias - renderizar como imagens */}
                {/* Tecnologias - renderizar como imagens */}
                <div className="flex flex-wrap gap-5 mb-6">
                    {techs.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={tech.img}
                                alt={tech.tech_name}
                                width={20}
                                height={20}
                                className="w-8 h-8 object-contain"
                            />
                            <span className="text-xs mt-1">{tech.tech_name}</span>
                        </div>
                    ))}
                </div>

                {/* Espaço flexível para empurrar botões para baixo */}
                <div className="grow"></div>

                {/* Botões - sempre na parte inferior */}
                <div className="flex gap-4 mt-auto w-3">
                    <a
                        href={linkGH}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-400 dark:bg-gray-900 text-white dark:text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <FaGithub />
                        {t("projectCard.code")}
                    </a>
                    <a
                        href={linkDeploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-center hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <FaExternalLinkAlt />
                        {t("projectCard.demo")}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;