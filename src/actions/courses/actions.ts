"use server";

import { TCourse } from "../../../public/courses";

export const fetchCourses = async (): Promise<TCourse[]> => {
  //   return await fetch("http://localhost:3131/api/v1/courses", {
  return await fetch("https://learnopia-backend.vercel.app/api/v1/courses", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
};
