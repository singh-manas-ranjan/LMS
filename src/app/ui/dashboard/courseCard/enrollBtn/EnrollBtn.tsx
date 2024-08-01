"use client";
import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { TCourse } from "../../../../../../public/courses";
import { setEnrolledCourses } from "@/actions/enrolledCourses/action";
import { getUserInfoFromLocalStorage } from "../../../navbar/Navbar";

interface Props {
  course: TCourse;
}

const EnrollBtn = ({ course }: Props) => {
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

  const handleButtonClick = async () => {
    // setEnrolled(!isEnrolled);
    showToast("Not Allowed", "info", "Contact Admin To Enroll");
    // const { _id } = getUserInfoFromLocalStorage();
    // try {
    //   const response = await setEnrolledCourses(_id, course._id);
    //   if (response < 300) {
    //     showToast("Success", "success", "Course enrolled successfully");
    //   } else if (response === 409) {
    //     showToast("Info", "info", "Already enrolled to this course.");
    //   }
    // } catch (error) {
    //   showToast("Error", "error", "Something went wrong");
    // }
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
