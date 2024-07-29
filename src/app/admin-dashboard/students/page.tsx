import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import StudentsList from "@/app/ui/adminDashboard/students/StudentsList";

const main = {
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  bg: "#ffffff",
  color: "#364A63",
};

const AdminStudents = async () => {
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Flex justifyContent={"space-between"} p={".5rem"} alignItems={"center"}>
        <Heading size={{ base: "sm", sm: "md" }} pl={".5rem"}>
          Students
        </Heading>
        <Flex></Flex>
      </Flex>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
        <StudentsList />
      </Box>
    </Box>
  );
};

export default AdminStudents;
