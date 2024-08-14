import { TUser } from "@/app/ui/navbar/Navbar";
import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { cookies } from "next/headers";

interface Props {
  params: { student_id: string };
}
const AdminStudentDashboard = async ({ params: { student_id } }: Props) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const student: TUser = await axios
    .get(`http://localhost:3131/api/v1/admin/access/students/${student_id}`, {
      // .get(`https://learnopia-backend.vercel.app/api/v1/admin/access/students/${student_id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    })
    .then((response) => response.data.body)
    .catch((error) => console.log(error));

  return (
    <Box w={"50%"} h={"50%"} margin={"auto"}>
      <Heading>
        {student?._id
          ? `${student.firstName} ${student.lastName}`
          : "Admin Student Dashboard"}
      </Heading>
    </Box>
  );
};

export default AdminStudentDashboard;
