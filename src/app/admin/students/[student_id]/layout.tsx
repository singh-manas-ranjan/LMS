import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/app/ui/adminDashboard/Sidebar";
import Navbar from "@/app/ui/adminDashboard/Navbar";
import { TUser } from "@/app/ui/navbar/Navbar";
import React from "react";
import { fetchUserById } from "@/actions/adminAccess/adminAccessAction";

interface Props {
  children: ReactNode;
  params: { student_id: string };
}

const Layout = async ({ children, params: { student_id } }: Props) => {
  const student: TUser | null = await fetchUserById(student_id, "students");

  return (
    <Flex direction="row">
      <Sidebar userId={student_id} />

      <Flex direction="column" ml={{ sm: "80px" }} flex="1" bg="gray.100">
        <Navbar user={student} userId={student_id} />
        <Box flex="1" w="100%" h={"100dvh"}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
