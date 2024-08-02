"use server";

import { TCourse } from "../../../public/courses";

export const fetchCourseById = async (courseId: string): Promise<TCourse> => {
  const response = await fetch(
    // `http://localhost:3131/api/v1/courses/${courseId}`
    `https://learnopia-backend.vercel.app/api/v1/courses/${courseId}`
  );
  return await response.json().then((data) => data.body);
};

export async function fetchAllCourses(): Promise<TCourse[]> {
  // const courses: TCourse[] = await fetch("http://localhost:3131/api/v1/courses")
  const courses: TCourse[] = await fetch(
    "https://learnopia-backend.vercel.app/api/v1/courses"
  )
    .then((res) => res.json())
    .then((data) => data.body);
  return courses;
}
