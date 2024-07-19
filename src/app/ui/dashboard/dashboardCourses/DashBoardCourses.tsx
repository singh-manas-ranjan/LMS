"use client";
import { Box } from "@chakra-ui/react";
import styles from "./DashBoardCourses.module.css";
import React from "react";
import coursesList from "../../../../../public/courses";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DashboardCoursesCard from "./DashboardCoursesCard";

const DashBoardCourses = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1261 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1260, min: 990 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 989, min: 570 },
      items: 3,
    },
    midMobile: {
      breakpoint: { max: 764, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };

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
        {coursesList
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
