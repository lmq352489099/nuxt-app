import type { Course } from '@prisma/client'
import prisma from '~/server/database/client'

export async function getNewCourses(): Promise<Course[] | null> {
  const result = await prisma.course.findMany({
    orderBy: { id: 'desc' },
    take: 4,
  })
  return result
}


export async function getCourses({ page, size }): Promise<{ courses: Course[] | null; total: number }> {


  const [courses, total] = await Promise.all([
  prisma.course.findMany({
      orderBy: { id: 'desc' },
      skip: 0 * size,
      take: 1,
    }),
    prisma.course.count(),
  ])
  console.log(courses, total)
  return { courses, total }
}

export async function getCourseById(id: number): Promise<Course | null> {
  const result = await prisma.course.findFirst({
    where: {
      id,
    },
    include: { Catalogue: true },
  })
  return result
}


