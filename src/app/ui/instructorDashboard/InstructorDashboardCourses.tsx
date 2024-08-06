"use client";
import React, { useEffect, useState } from "react";
import { getUserInfoFromLocalStorage } from "../navbar/Navbar";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Grid,
  Spinner,
  Text,
  WrapItem,
} from "@chakra-ui/react";

import { fetchInstructorCourses } from "@/actions/instructor/action";
import { TCourse } from "../../../../public/courses";

const InstructorDashboardCourses = () => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  useEffect(() => {
    const instructor = getUserInfoFromLocalStorage();
    async function getInstructorCourses() {
      const data = await fetchInstructorCourses(instructor._id ?? "");
      setCourses(data);
    }
    getInstructorCourses();
  }, []);
  if (courses?.length === 0) {
    return (
      <Box
        width={"100%"}
        display={"grid"}
        height={"100%"}
        placeItems={"center"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          color="blue.500"
          emptyColor="gray.200"
          size="xl"
        />
      </Box>
    );
  }
  return (
    <Box h={"100%"} w={"100%"}>
      <Accordion h={"100%"}>
        {courses.slice(0, 4).map((course, idx) => (
          <AccordionItem key={idx}>
            <Text>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <WrapItem>
                    <Grid m={2}>
                      <Text fontSize={{ base: "xs", md: "sm" }}>
                        {course.courseName}
                      </Text>
                      <Text
                        fontSize={{
                          base: "xs",
                          md: "sm",
                        }}
                        color={"#8D94A3"}
                      >{`Rating: ${course.courseRating}`}</Text>
                    </Grid>
                  </WrapItem>
                </Box>
              </AccordionButton>
            </Text>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default InstructorDashboardCourses;
