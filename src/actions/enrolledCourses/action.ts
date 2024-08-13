"use server";

import { TCourse } from "../../../public/courses";

export const getEnrolledCourses = async (id: string): Promise<TCourse[]> => {
  try {
    const response = await fetch(
      `https://learnopia-backend.vercel.app/api/v1/students/courses/${id}`
      // `http://localhost:3131/api/v1/students/courses/${id}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorText}`
      );
    }

    const data = await response.json();

    if (!Array.isArray(data.body)) {
      throw new Error("Unexpected response format");
    }

    return data.body as TCourse[];
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    return [];
  }
};

export const setEnrolledCourses = async (
  id: string,
  courseId: string
): Promise<number> => {
  try {
    const response = await fetch(
      `https://learnopia-backend.vercel.app/api/v1/students/courses/${id}`,
      // `http://localhost:3131/api/v1/students/courses/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error: ${response.status} - ${errorText}`);

      if (response.status === 409) {
        return 409;
      }
      return response.status;
    }

    return response.status;
  } catch (error) {
    console.error("ERROR!! setEnrolledCourses Action:", error);
    return 500;
  }
};
