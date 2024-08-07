import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import { fetchAllUsers } from "@/actions/users/action";
import InstructorList from "@/app/ui/instructorDashboard/InstructorList";

const main = {
  width: "100%",
  height: "100%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  overflow: "hidden",
};

const Instructors = async () => {
  const instructors = await fetchAllUsers("instructors");

  return (
    <Box as="main" sx={main}>
      <Box
        w={"100%"}
        h={"100%"}
        p={".5rem"}
        color={"#044f63"}
        display={"flex"}
        flexDir={"column"}
        rowGap={3}
      >
        <Box>
          <Heading as="h2" size={{ base: "md" }} p={".5rem"}>
            Instructors
          </Heading>
        </Box>
        <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
          <InstructorList instructors={instructors} />
        </Box>
      </Box>
    </Box>
  );
};

export default Instructors;
