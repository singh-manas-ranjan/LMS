"use client";
import { Box, Spinner } from "@chakra-ui/react";
import styles from "./DashBoardCourses.module.css";
import React, { useEffect, useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DashboardCoursesCard from "./DashboardCoursesCard";
import { TCourse } from "../../../../../public/courses";
import { fetchAllCourses } from "@/actions/courses/actions";

const DashBoardCourses = () => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  useEffect(() => {
    async function getCourses() {
      setCourses(await fetchAllCourses());
    }
    getCourses();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1261 },
      items: 5.5,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1260, min: 990 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 989, min: 570 },
      items: 3,
      partialVisibilityGutter: 15,
    },
    midMobile: {
      breakpoint: { max: 764, min: 520 },
      items: 2,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1.1,
      partialVisibilityGutter: 5,
    },
  };

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
    <Box width={"100%"} display={"grid"} height={"fit-content"}>
      <Carousel
        responsive={responsive}
        itemClass={styles.carouselItem}
        swipeable={true}
        draggable={true}
        className={styles.carousel}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {Array.isArray(courses) &&
          courses
            .filter((course) => Number(course.courseRating) >= 4.5)
            .sort((a, b) => {
              return Number(b.courseRating) - Number(a.courseRating);
            })
            .map((course, idx) => (
              <DashboardCoursesCard key={idx} course={course} />
            ))}
      </Carousel>
    </Box>
  );
};

export default DashBoardCourses;
