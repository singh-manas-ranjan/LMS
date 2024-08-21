"use server";
import axios from "axios";
import { TCourse } from "../../../public/courses";

export type TAddress = {
  addressLine1: string;
  addressLine2: string;
  state: string;
  country: string;
};

export type TEducation = {
  _id?: string;
  degree: string;
  institution: string;
  passingYear: string;
};
export type TExperience = {
  _id?: string;
  organization: string;
  role: string;
  years: string;
};

export type TAchievement = {
  _id?: string;
  title: string;
  year: string;
};

export type TInstructor = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  role: string;
  aboutMe?: string;
  domain?: string;
  address: TAddress;
  avatar: string;
  services?: string[];
  languages?: string[];
  education?: TEducation[];
  experience?: TExperience[];
  achievements?: TAchievement[];
  publishedCourses: TCourse[];
};

export const fetchInstructorCourses = async (
  id: string
): Promise<TCourse[]> => {
  try {
    const response = await axios.get(
      `https://learnopia-backend.vercel.app/api/v1/instructors/courses/${id}`
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
