"use server";

import { TUser } from "@/app/ui/navbar/Navbar";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function fetchUserById(
  studentId: string,
  role: "students" | "instructors"
): Promise<TUser> {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      throw new Error("No access token found");
    }

    const response = await axios.get(
      // `http://localhost:3131/api/v1/admin/access/${role}/${studentId}`,
      `https://learnopia-backend.vercel.app/api/v1/admin/access/${role}/${studentId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );

    return response.data.body as TUser;
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    // redirect(`/admin-dashboard/accounts/${role}`);
    return {} as TUser;
  }
}
