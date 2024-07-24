"use client";
import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import MyCoursesCard from "./myCoursesCard/MyCoursesCard";
import { getEnrolledCourses } from "@/actions/enrolledCourses/action";
import { TCourse } from "../../../../../public/courses";
import { getUserInfoFromLocalStorage } from "../navbar/Navbar";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { addEnrolledCourse } from "@/lib/features/enrolledCourses/enrolledCoursesSlice";

const EnrolledCourses = () => {
  const dispatch = useAppDispatch();
  const [eCourses, setECourses] = useState<TCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEnrolledCourses() {
      try {
        const { _id } = getUserInfoFromLocalStorage();
        const courses = await getEnrolledCourses(_id);
        setECourses(courses);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch enrolled courses. Please try again later.");
        setLoading(false);
      }
    }

    fetchEnrolledCourses();
  }, []);
  if (eCourses.length !== 0) {
    dispatch(addEnrolledCourse(eCourses));
  }

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

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Box w={"100%"} h={"100%"} display={"grid"} placeItems={"center"}>
      {Array.isArray(eCourses) && eCourses.length !== 0 ? (
        <SimpleGrid
          w={"100%"}
          h={"100%"}
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
        eCourses.length === 0 && <Heading>No courses found</Heading>
      )}
    </Box>
  );
};

export default EnrolledCourses;
