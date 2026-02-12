// types/index.ts

// =========================
// Tech
// =========================
export interface Tech {
  img: string
  tech_name: string
}

// =========================
// Project Card
// =========================
export interface ProjectCardProps {
  title: string
  description: string
  img: string
  altImg: string
  techs: Tech[]
  linkGH: string
  linkDeploy: string
}

// =========================
// Course (base structure)
// =========================
export interface Course {
  id?: string
  title: string
  engTitle?: string
  platform?: string
  hasCertification?: boolean
}

// =========================
// API Responses
// =========================

// Caso courses.json retorne:
// [
//   { "title": "Curso X" }
// ]
export type CoursesResponse = Course[]

// Caso courses-eng-titles.json retorne:
// [
//   { "title": "Curso X", "engTitle": "Course X" }
// ]
export type CoursesEngTitlesResponse = Course[]

// =========================
// CourseData (usado no componente)
// =========================
export type CourseData = Course

// =========================
// Component Props
// =========================
export interface CoursesProps {
  courses?: CourseData[]
}
