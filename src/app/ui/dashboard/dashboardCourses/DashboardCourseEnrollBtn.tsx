"use client";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { TCourse } from "../../../../../public/courses";

interface Props {
  course: TCourse;
}

const DashboardCourseEnrollBtn = ({ course }: Props) => {
  const [isEnrolled, setEnrolled] = useState(false);

  const handleButtonClick = () => {
    setEnrolled(!isEnrolled);
    localStorage.setItem("enrolledCourses", JSON.stringify(course));
  };
  return (
    <Button
      fontSize={{ base: "sm" }}
      colorScheme="teal"
      isDisabled={isEnrolled}
      onClick={() => {
        handleButtonClick();
      }}
      size={{ base: "sm" }}
    >
      {isEnrolled ? "Enrolled!" : "Enroll Now!"}
    </Button>
  );
};

export default DashboardCourseEnrollBtn;
