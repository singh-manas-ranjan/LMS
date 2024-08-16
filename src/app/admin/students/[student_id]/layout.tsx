import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/app/ui/adminDashboard/Sidebar";
import Navbar from "@/app/ui/adminDashboard/Navbar";
import { TUser } from "@/app/ui/navbar/Navbar";
import React from "react";
import { fetchStudentById } from "@/actions/adminAccess/studentAction";

interface Props {
  children: ReactNode;
  params: { student_id: string };
}

const Layout = async ({ children, params: { student_id } }: Props) => {
  const student: TUser | null = await fetchStudentById(student_id);

  return (
    <Flex direction="row">
      <Sidebar studentId={student_id} />

      <Flex direction="column" ml={{ sm: "80px" }} flex="1" bg="gray.100">
        {student ? (
          <Navbar user={student} studentId={student_id} />
        ) : (
          <Navbar user={{} as TUser} studentId={student_id} />
        )}

        <Box flex="1" w="100%" h={"100dvh"}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
