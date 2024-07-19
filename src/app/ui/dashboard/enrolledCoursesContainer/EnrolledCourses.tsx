"use client";
import { useAppSelector } from "@/app/hooks/reduxHooks";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MyCoursesCard from "./myCoursesCard/MyCoursesCard";

const EnrolledCourses = () => {
  const enrolledCourses = Array.from(
    new Set(useAppSelector((state) => state.courses.enrolledCourses))
  );
  return (
    <SimpleGrid
      spacing={5}
      templateColumns={{
        base: "repeat(auto-fill, minmax(200px, 1fr))",
        sm: "repeat(auto-fill, minmax(220px, 1fr))",
        xl: "repeat(auto-fill, minmax(250px, 1fr))",
      }}
      w={"100%"}
      justifyContent={"center"}
      padding={".5rem"}
    >
      {enrolledCourses.map((course, idx) => (
        <MyCoursesCard key={idx} course={course} />
      ))}
    </SimpleGrid>
  );
};

export default EnrolledCourses;
