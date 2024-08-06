"use server";
import axios from "axios";
import { TCourse } from "../../../public/courses";

export type TInstructor = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  role: string;
  address: string;
  avatar: string;
  publishedCourses: TCourse[];
};

export const fetchInstructorCourses = async (
  id: string
): Promise<TCourse[]> => {
  try {
    const response = await axios.get(
      // `http://localhost:3131/api/v1/instructors/courses/${id}`
      `https://learnopia-backend.vercel.app/api/v1/courses/${id}`
    );

    if (!response.data) {
      throw new Error("Failed to fetch all courses: No data in response");
    }

    return response.data.body;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const fetchInstructorById = async (id: string): Promise<TInstructor> => {
  try {
    const response = await axios.get(
      // `http://localhost:3131/api/v1/instructors/profile/${id}`
      `https://learnopia-backend.vercel.app/api/v1/instructors/profile/${id}`
    );
    if (!response.data || !response.data.body) {
      throw new Error("Failed to fetch instructor by id: No data in response");
    }

    return response.data.body as TInstructor;
  } catch (error) {
    console.error("Error fetching instructor by id:", error);
    return {} as TInstructor;
  }
};
