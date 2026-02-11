'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import ptTranslations from '@/i18n/locales/pt.json';
import enTranslations from '@/i18n/locales/en.json';

const Footer = () => {
    const { language } = useContext(LanguageContext);
    const t = language === 'portuguese' ? ptTranslations.footer : enTranslations.footer;

    return (
        <footer className="py-10 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start gap-8">
                    {/* Section Portfolio */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">{t.portfolio}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {t.description}
                        </p>
                    </div>

                    {/* Section Quick Links */}
                    {/* <div className="w-full md:w-1/3 lg:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">{t.quick_links}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">{t.about}</Link></li>
                            <li><Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">{t.projects}</Link></li>
                            <li><Link href="/skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">{t.skills}</Link></li>
                            <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">{t.contact}</Link></li>
                        </ul>
                    </div> */}

                    {/* Section Connect */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">{t.connect}</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/YuriCF1" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 text-2xl">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/yuricf/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 text-2xl">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:yurifdev@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 text-2xl">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>{t.copyright}</p>
                    <p>{t.made_with}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;