'use client'

import { useState, useEffect } from 'react'
import { CourseData } from '@/types'
import { useTranslation } from 'react-i18next'
import { LiaCertificateSolid } from "react-icons/lia";
import i18n from '@/i18n'
import { SlArrowDown } from 'react-icons/sl';

const Courses = () => {
    const [courses, setCourses] = useState<CourseData[]>([])
    const [loading, setLoading] = useState(true)
    const [showAllCourses, setShowAllCourses] = useState(false)

    const { t } = useTranslation()

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true)
                const response = await fetch(
                    '/api/courses-pt-en.json'
                )
                if (!response.ok) {
                    throw new Error('Failed to fetch courses')
                }

                const data = await response.json()
                const coursesArray = data.courses || data.projects || []
                const normalizedCourses: CourseData[] = Array.isArray(coursesArray)
                    ? coursesArray
                    : []

                setCourses(normalizedCourses)
            } catch (error) {
                console.error('Error fetching courses:', error)
                setCourses([])
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [])

    if (loading) {
        return (
            <section className="max-w-6xl mx-auto px-5 py-20 text-center">
                <div className="flex justify-center items-center min-h-[200px] text-gray-500 text-lg">
                    {t('loading_courses')}
                </div>
            </section>
        )
    }

    const handleToggleCourses = () => {
        setShowAllCourses(!showAllCourses)
    }



    return (
        <section className="max-w-6xl mx-auto px-5 py-20 text-center">
            <div className="mb-16">
                <div className="flex justify-center mb-6 text-blue-500">
                    <LiaCertificateSolid className='text-8xl' />
                </div>

                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {t('courses.title')}
                </h2>

                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    {t('courses.subtitle')}
                </p>
            </div>

            {/* First grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {courses.slice(0, 6).map((course) => (
                    <div
                        key={course.id || course.title}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-700"
                    >
                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 leading-snug flex-1">
                                {i18n.resolvedLanguage === 'en' && course.engTitle
                                    ? course.engTitle
                                    : course.title}
                            </h3>
                            <div className="flex justify-between items-center mt-auto">
                                {course.hasCertification && (
                                    <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide">
                                        {t('certified')}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show courses from 7th onwards when toggled */}
            {showAllCourses && courses.length > 6 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {courses.slice(6).map((course) => (
                        <div
                            key={course.id || course.title}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-700"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 leading-snug flex-1">
                                    {i18n.resolvedLanguage === 'en' && course.engTitle
                                        ? course.engTitle
                                        : course.title}
                                </h3>
                                <div className="flex justify-between items-center mt-auto">
                                    {course.hasCertification && (
                                        <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide">
                                            {t('certified')}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Only show button if there are more than 6 courses */}
            {courses.length > 6 && (
                <div className="relative flex items-center justify-center my-6">
                    <div className="absolute w-full h-px bg-linear-to-r from-transparent via-gray-400 to-transparent"></div>

                    <button
                        onClick={handleToggleCourses}
                        className="
                             relative z-10
                             w-12 h-12
                             rounded-full
                             bg-gray-300
                             dark:bg-blue-200
                             shadow-md
                             flex items-center justify-center
                             transition-all duration-300
                             hover:scale-110
                            "
                    >
                        <SlArrowDown
                            className={`
                                animate-bounce
                                text-blue-950
      
                                ${showAllCourses ? "-mt-3" : "mt-4"}
                                text-3xl
                                transition-transform duration-900
                                ${showAllCourses ? "rotate-180" : ""}
                            `}
                        />
                    </button>
                </div>

            )}

        </section>
    )
}

export default Courses
