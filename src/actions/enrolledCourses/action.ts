"use server";

import { TCourse } from "../../../public/courses";

export const getEnrolledCourses = async (id: string): Promise<TCourse[]> => {
  try {
    const response = await fetch(
      `http://localhost:3131/api/v1/students/courses/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    return [];
  }
};

export const setEnrolledCourses = async (id: string, courseId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3131/api/v1/students/courses/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error("ERROR!! setEnrolledCourses Action:", error);
    return 500;
  }
};
