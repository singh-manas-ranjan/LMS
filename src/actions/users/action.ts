"use server";

import { TStudent } from "../../../public/studentInfo";

async function fetchAllUsers(
  userRole: "students" | "instructors"
): Promise<TStudent[]> {
  try {
    const response = await fetch(
      `https://learnopia-backend.vercel.app/api/v1/${userRole}`
    );

    if (!response.ok) {
      throw new Error(`Unable to Fetch All Users: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching users for ${userRole}:`, error);
    return [];
  }
}

export { fetchAllUsers };
