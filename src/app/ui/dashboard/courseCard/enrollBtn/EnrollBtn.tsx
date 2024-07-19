"use client";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { addEnrolledCourse } from "@/lib/features/enrolledCourses/enrolledCoursesSlice";
import { TCourse } from "../../../../../../public/courses";

interface Props {
  course: TCourse;
}

const EnrollBtn = ({ course }: Props) => {
  const [isEnrolled, setEnrolled] = useState(false);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    setEnrolled(!isEnrolled);
    dispatch(addEnrolledCourse(course));
    localStorage.setItem("enrolledCourses", JSON.stringify(course));
  };
  return (
    <Button
      fontSize={{ base: "sm", xl: "md" }}
      colorScheme="teal"
      isDisabled={isEnrolled}
      onClick={() => {
        handleButtonClick();
      }}
      size={{ base: "sm", xl: "md" }}
    >
      {isEnrolled ? "Enrolled!" : "Enroll Now!"}
    </Button>
  );
};

export default EnrollBtn;
