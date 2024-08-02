"use client";
import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import MyCoursesCard from "./myCoursesCard/MyCoursesCard";
import { getEnrolledCourses } from "@/actions/enrolledCourses/action";
import { TCourse } from "../../../../../public/courses";
import { getUserInfoFromLocalStorage } from "../../navbar/Navbar";

const EnrolledCourses = () => {
  const [eCourses, setECourses] = useState<TCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEnrolledCourses() {
      try {
        const { _id } = getUserInfoFromLocalStorage();
        const courses = await getEnrolledCourses(_id || "");
        setECourses(courses);
        localStorage.setItem("enrolledCoursesList", JSON.stringify(courses));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchEnrolledCourses();
  }, []);

  if (loading) {
    return (
      <Box w={"100%"} h={"100%"} display={"grid"} placeItems={"center"}>
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
    <Box w={"100%"} h={"100%"}>
      {Array.isArray(eCourses) && eCourses.length !== 0 ? (
        <SimpleGrid
          spacing={5}
          templateColumns={{
            base: "repeat(auto-fill, minmax(200px, 1fr))",
            sm: "repeat(auto-fill, minmax(220px, 1fr))",
            xl: "repeat(auto-fill, minmax(220px, 1fr))",
          }}
          justifyContent={"center"}
          padding={".5rem"}
        >
          {eCourses.map((course, idx) => (
            <MyCoursesCard key={idx} course={course} />
          ))}
        </SimpleGrid>
      ) : (
        eCourses.length === 0 && (
          <Box w={"100%"} h={"100%"} display={"grid"} placeItems={"center"}>
            <Heading>No courses found</Heading>
          </Box>
        )
      )}
    </Box>
  );
};

export default EnrolledCourses;
