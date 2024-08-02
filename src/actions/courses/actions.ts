"use server";

import { TCourse } from "../../../public/courses";

export const fetchCourseById = async (courseId: string): Promise<TCourse> => {
  try {
    const response = await fetch(
      // `http://localhost:3131/api/v1/courses/${courseId}`
      `https://learnopia-backend.vercel.app/api/v1/courses/${courseId}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorText}`
      );
    }

    const data = await response.json();

    return data.body as TCourse;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    throw error;
  }
};

export const fetchAllCourses = async (): Promise<TCourse[]> => {
  try {
    const response = await fetch(
      "https://learnopia-backend.vercel.app/api/v1/courses"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch all courses: ${response.statusText}`);
    }
    return await response.json().then((data) => data.body);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};
