import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import UsersList from "@/app/ui/adminDashboard/users/UsersList";
import FilterUser from "@/app/ui/adminDashboard/instructors/FilterUser";

const main = {
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: { base: "1rem", lg: "1rem 2rem 1rem 2rem" },
  bg: "#ffffff",
  color: "#364A63",
};

const AdminInstructor = async () => {
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Flex justifyContent={"space-between"} p={".5rem"} alignItems={"center"}>
        <Heading size={{ base: "sm", sm: "md" }}>Instructors</Heading>
        <Flex></Flex>
      </Flex>
      <Box
        w={"100%"}
        h={"100%"}
        columnGap={{ md: 5, lg: 10 }}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          flex={{ base: 0.5, sm: 0.6, md: 1.5, lg: 1 }}
          p={{ base: 3, lg: 0 }}
          w={"100%"}
        >
          <Suspense>
            <FilterUser />
          </Suspense>
        </Box>
        <Box
          flex={4}
          overflowY={"scroll"}
          w={"100%"}
          h={"100%"}
          sx={sxScrollbar}
        >
          <Suspense>
            <UsersList userRole="instructors" />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminInstructor;
