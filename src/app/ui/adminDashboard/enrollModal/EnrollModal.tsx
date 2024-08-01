"use client";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
  VStack,
  Text,
  Box,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TCourse } from "../../../../../public/courses";
import { useAppSelector } from "@/lib/store";
import { useForm } from "react-hook-form";
import { setEnrolledCourses } from "@/actions/enrolledCourses/action";

type TEnrollCourse = {
  courseId: string;
};

type Props = {
  courses: TCourse[];
  studentId: string;
  studentFirstName: string;
};

function EnrollModal({ courses, studentId, studentFirstName }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [enrolledCourses, setCourses] = useState<TCourse[]>(courses);

  const AllAvailableCourses = useAppSelector(
    (state) => state.allCourses.courses
  );

  const { register, handleSubmit } = useForm<TEnrollCourse>();

  function handleUpdateEnrolledCourse(newCourse: TCourse) {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  }

  const toast = useToast();
  const showToast = async (
    title: string,
    description: string,
    status: "success" | "error" | "info"
  ) => {
    setTimeout(() => {
      toast({
        title,
        description,
        status,
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }, 500);
  };

  async function onSubmit(e: TEnrollCourse) {
    const newCourse = AllAvailableCourses.find(
      (course) => course._id === e.courseId
    );
    if (!newCourse) return;
    handleUpdateEnrolledCourse(newCourse);
    try {
      const status = await setEnrolledCourses(studentId, e.courseId);
      if (status < 300) {
        showToast(
          "Enrolled Successfully",
          `${studentFirstName} Enrolled To ${newCourse.courseName}`,
          "success"
        );
      } else {
        showToast(
          "Error Enrolling",
          `Failed to Enroll ${studentFirstName} to ${newCourse.courseName}`,
          "error"
        );
      }
    } catch (error) {
      console.error(error);
      setCourses(courses);
      showToast(
        "Error Enrolling",
        `Failed to Enroll ${studentFirstName} to ${newCourse.courseName}`,
        "error"
      );
    }
  }

  return (
    <>
      <Link
        onClick={onOpen}
        fontSize={{ base: "xs", md: "sm" }}
        color={"#1e88e5"}
      >
        courses
      </Link>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", sm: "sm", md: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: "sm", xl: "md" }}>
            Enrolled Courses
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={"start"}>
              {enrolledCourses.map((course, idx) => (
                <Text key={idx} fontSize={{ base: "xs", xl: "sm" }}>
                  {`${idx + 1} : ${course.courseName}`}
                </Text>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box width={"70%"}>
                <Select
                  placeholder="Enroll new course"
                  size={{ base: "xs", xl: "sm" }}
                  {...register("courseId")}
                >
                  {AllAvailableCourses.map((course, idx) => (
                    <option key={idx} value={course._id}>
                      {course.courseName}
                    </option>
                  ))}
                </Select>
              </Box>
              <Button
                type="submit"
                colorScheme="blue"
                onClick={onClose}
                size={{ base: "xs", xl: "sm" }}
              >
                <Text p={2}>Enroll</Text>
              </Button>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default React.memo(EnrollModal);
