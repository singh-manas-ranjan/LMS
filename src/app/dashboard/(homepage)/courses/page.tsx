"use client";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CourseCard from "@/app/ui/dashboard/courseCard/CourseCard";
import OrderByBtn from "@/app/ui/dashboard/orderByBtn/OrderByBtn";
import orderByBtns from "../../../../../public/orderByBtns";
import { sxScrollbar } from "../../../../../public/scrollbarStyle";
import { TCourse } from "../../../../../public/courses";
import { fetchAllCourses } from "@/actions/courses/actions";

const main = {
  width: "100%",
  height: "100%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  overflow: "hidden",
};

const Courses = () => {
  const [coursesList, setCoursesList] = useState<TCourse[]>([]);

  useEffect(() => {
    async function getCourses() {
      try {
        setCoursesList(await fetchAllCourses());
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    getCourses();
  }, []);

  console.log(coursesList);

  const [filterBy, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const handleOnFilterChange = (e: string | string[]) => {
    setFilter(e.toString());
  };

  const handleOnSortChange = (e: string | string[]) => {
    setSortBy(e.toString());
  };

  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Box
        alignSelf={"flex-end"}
        marginRight={1}
        display={"flex"}
        columnGap={5}
      >
        {orderByBtns.map((orderBy, idx) => (
          <OrderByBtn
            key={idx}
            button={orderBy}
            handleOnChange={
              orderBy.btnName === "Filter"
                ? handleOnFilterChange
                : handleOnSortChange
            }
            selectedOptn={orderBy.btnName === "Filter" ? filterBy : sortBy}
          />
        ))}
      </Box>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
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
          {coursesList
            .sort((a, b) => {
              if (sortBy === "default") {
                return 0;
              } else if (sortBy === "rating") {
                return Number(b.courseRating) - Number(a.courseRating);
              } else {
                return sortBy === "ascending"
                  ? a.courseName.localeCompare(b.courseName)
                  : b.courseName.localeCompare(a.courseName);
              }
            })
            .filter((course) => {
              return filterBy === "all"
                ? course
                : filterBy === "paid"
                ? course.isPaidCourse === true
                : course.isPaidCourse === false;
            })
            .map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Courses;
