"use server";

import { TUser } from "@/app/ui/navbar/Navbar";
import axios from "axios";

async function fetchAllUsers(
  userRole: "students" | "instructors"
): Promise<TUser[]> {
  try {
    const users: TUser[] = await axios
      .get(`${process.env.BASE_URL}/${userRole}`)
      .then((res) => res.data.body);
    return users;
  } catch (error) {
    console.error(`Error fetching users for ${userRole}:`, error);
    return [];
  }
}

export { fetchAllUsers };
