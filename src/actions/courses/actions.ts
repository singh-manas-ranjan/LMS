"use server";

import { TCourse } from "../../../public/courses";

export const fetchCourses = async (): Promise<TCourse[]> => {
  // await fetch("https://learnopia-backend.vercel.app/api/v1/courses", {
  let courses: TCourse[] = [];
  try {
    courses = await fetch("http://localhost:3131/api/v1/courses", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data);
  } catch (err) {
    console.log(err);
  }
  return courses;
};
