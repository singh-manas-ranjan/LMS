"use server";

import { TStudent } from "../../../public/studentInfo";

async function fetchAllUsers(
  userRole: "students" | "instructors"
): Promise<TStudent[]> {
  try {
    const response = await fetch(
      `https://learnopia-backend.vercel.app/api/v1/${userRole}`
    );

    return await response
      .json()
      .then((res) => res.body)
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(`Error!! fetchAllUsers action${error}`);
    return [];
  }
}

export { fetchAllUsers };
