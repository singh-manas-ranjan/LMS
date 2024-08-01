"use client";
import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { TCourse } from "../../../../../public/courses";

interface Props {
  course: TCourse;
}

const DashboardCourseEnrollBtn = ({ course }: Props) => {
  const [isEnrolled, setEnrolled] = useState(false);
  const toast = useToast();

  const showToast = (
    title: string,
    status: "info" | "warning" | "success" | "error" | "loading",
    desc: string
  ) => {
    toast({
      title,
      description: desc,
      status,
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };
  const handleButtonClick = () => {
    // setEnrolled(!isEnrolled);
    showToast("Not Allowed", "info", "Contact Admin To Enroll");
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
