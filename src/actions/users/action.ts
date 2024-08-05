"use server";

import { TUser } from "@/app/ui/navbar/Navbar";
import axios from "axios";

async function fetchAllUsers(
  userRole: "students" | "instructors"
): Promise<TUser[]> {
  try {
    const users: TUser[] = await axios
      // .get(`http://localhost:3131/api/v1/${userRole}`)
      .get(`https://learnopia-backend.vercel.app/api/v1/${userRole}`)
      .then((res) => res.data.body);
    return users;
  } catch (error) {
    console.error(`Error fetching users for ${userRole}:`, error);
    return [];
  }
}

export { fetchAllUsers };
