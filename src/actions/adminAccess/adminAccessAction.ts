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
    // const cookieStore = cookies();
    // const accessToken = cookieStore.get("accessToken")?.value;

    // if (!accessToken) {
    //   console.error("No access token found in cookies");
    //   return {} as TUser;
    // }

    // const response = await axios.get(
    //   `http://localhost:3131/api/v1/admin/access/${role}/${studentId}`,
    //   // `https://learnopia-backend.vercel.app/api/v1/admin/access/${role}/${studentId}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //     withCredentials: true,
    //   }
    // );

    // return response.data.body as TUser;
    const response = await fetch(
      `http://localhost:3131/api/v1/admin/access/${role}/${studentId}`,
      // `https://learnopia-backend.vercel.app/api/v1/admin/access/${role}/${studentId}`,
      {
        method: "GET",
        headers: {
          Cookie: cookies().toString(),
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);

    if (!responseData.success) {
      console.error("API response status is not true:", responseData.message);
      return {} as TUser; // Returning an empty user object if status is not true
    }

    return responseData.body as TUser; // Return only the user object
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    // redirect(`/admin-dashboard/accounts/${role}`);
    return {} as TUser;
  }
}
