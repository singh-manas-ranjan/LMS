import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/app/ui/adminDashboard/Sidebar";
import Navbar from "@/app/ui/adminDashboard/Navbar";
import React from "react";

interface Props {
  children: ReactNode;
  params: { instructor_id: string };
}

const Layout = async ({ children, params: { instructor_id } }: Props) => {
  return (
    <Flex direction="row">
      <Sidebar userId={instructor_id} />

      <Flex direction="column" ml={{ sm: "80px" }} flex="1" bg="gray.100">
        <Navbar userId={instructor_id} />
        <Box flex="1" w="100%" h={"100dvh"}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
