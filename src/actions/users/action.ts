"use server";

import { TUser } from "@/app/ui/dashboard/navbar/Navbar";

async function fetchAllUsers(
  userRole: "admin" | "students" | "instructors"
): Promise<TUser[]> {
  console.log("fetching All Users...");

  try {
    const response = await fetch(`http://localhost:3131/api/v1/${userRole}`);
    const usersList = await response
      .json()
      .then((res) => res.body)
      .catch((err) => console.log(err));

    return usersList;
  } catch (error) {
    console.log(`Error!! fetchAllUsers action${error}`);
    return [];
  }
}

export { fetchAllUsers };
