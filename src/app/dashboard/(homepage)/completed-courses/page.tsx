import CompletedCourseCard from "@/app/ui/dashboard/completedCourseCard/CompletedCourseCard";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import coursesList from "../../../../../public/courses";
import { sxScrollbar } from "../../../../../public/scrollbarStyle";

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
const CompletedCourses = () => {
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
            Completed Courses
          </Heading>
        </Box>
        <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
          <Box display={"grid"} rowGap={5} p={".5rem"}>
            {coursesList.map((course, idx) => (
              <CompletedCourseCard key={idx} course={course} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompletedCourses;
