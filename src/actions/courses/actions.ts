"use server";

import { TCourse } from "../../../public/courses";

export const fetchCourses = async (): Promise<TCourse[]> => {
  let courses: TCourse[] = [];
  try {
    // courses = await fetch("http://localhost:3131/api/v1/courses", {
    courses = await fetch(
      "https://learnopia-backend.vercel.app/api/v1/courses",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => data.body);
  } catch (err) {
    console.log(err);
  }
  return courses;
};

export const fetchCourseById = async (courseId: string): Promise<TCourse> => {
  const response = await fetch(
    // `http://localhost:3131/api/v1/courses/${courseId}`
    `https://learnopia-backend.vercel.app/api/v1/courses/${courseId}`
  );
  return await response.json().then((data) => data.body);
};
