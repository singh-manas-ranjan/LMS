"use client";
import {
  Box,
  CardHeader,
  Heading,
  Image,
  Text,
  CardBody,
  Grid,
  Card,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Select,
  Stack,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { sxScrollbar } from "../../../../../../public/scrollbarStyle";
import axios from "axios";
import { Plus } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { TCourse } from "../../../../../../public/courses";
import { fetchAllCourses } from "@/actions/courses/actions";
import { setEnrolledCourses } from "@/actions/enrolledCourses/action";
import { initialState, userDataReducer } from "@/utils/hooks";

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
interface Props {
  params: { student_id: string };
}

interface TCourseId {
  course_id: string;
}

const textStyle = {
  fontSize: { base: "xs", md: "sm", lg: "md" },
};

const MyCourses = ({ params: { student_id } }: Props) => {
  const [state, dispatch] = useReducer(userDataReducer, initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const eCourses = state.data?.enrolledCourses;

  const { handleSubmit, control } = useForm<TCourseId>({
    defaultValues: {
      course_id: "",
    },
  });
  const [AllCourses, setAllCourses] = useState<TCourse[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const response = await axios.get(
          `https://learnopia-backend.vercel.app/api/v1/admin/access/students/${student_id}`,
          {
            withCredentials: true,
          }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.body });
        setAllCourses(await fetchAllCourses());
      } catch (error) {
        console.error("Error fetching user data:", error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    fetchUserData();
  }, [student_id]);

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

  async function onSubmit(data: TCourseId) {
    const oldStudentObj = state.data;
    const selectedCourse = AllCourses?.find(
      (course) => course._id === data.course_id
    );

    if (selectedCourse) {
      const newStudentObj = {
        ...state.data,
        enrolledCourses: [
          ...(state.data.enrolledCourses || []),
          selectedCourse,
        ],
      };
      dispatch({ type: "UPDATE_USER", payload: newStudentObj });

      try {
        const status = await setEnrolledCourses(student_id, data.course_id);
        if (status < 300) {
          showToast(
            "Enrolled Successfully",
            `${state.data.firstName} Enrolled To ${selectedCourse.courseName}`,
            "success"
          );
        } else {
          showToast(
            "Error Enrolling",
            `Failed to Enroll ${state.data.firstName} to ${selectedCourse.courseName}`,
            "error"
          );
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: "UPDATE_USER", payload: oldStudentObj });
        showToast(
          "Error Enrolling",
          `Failed to Enroll ${state.data.firstName} to ${selectedCourse.courseName}`,
          "error"
        );
      }
    }
  }

  if (state.loading) {
    return (
      <Box
        w={"100%"}
        h={"100dvh"}
        display={"grid"}
        placeItems={"center"}
        bg={"#fff"}
      >
        <Spinner
          thickness="4px"
          speed="0.85s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }

  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Box>
        <Button
          leftIcon={<Plus size={18} />}
          colorScheme="teal"
          onClick={onOpen}
          float={"right"}
          size={{ base: "xs", md: "sm" }}
          borderRadius={4}
          mr={3}
        >
          Course
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <DrawerCloseButton />
              <DrawerHeader
                borderBottomWidth="1px"
                fontSize={{ base: "sm", lg: "md" }}
              >
                Enroll New Course
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <Box w={"100%"} h={"100%"}>
                    <FormLabel fontSize={"sm"}>Select Course</FormLabel>
                    <Controller
                      name="course_id"
                      control={control}
                      render={({ field }) => (
                        <Select
                          id="select_course"
                          placeholder="select course"
                          {...field}
                          size={"sm"}
                          fontSize={"xs"}
                        >
                          {Array.isArray(AllCourses) &&
                            AllCourses.map((course) => (
                              <option
                                key={course._id}
                                value={course._id}
                                style={{ fontSize: ".7rem" }}
                              >
                                {course.courseName.substring(0, 40)}
                              </option>
                            ))}
                        </Select>
                      )}
                    />
                  </Box>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                  size={"sm"}
                  borderRadius={4}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  colorScheme="blue"
                  size={"sm"}
                  borderRadius={4}
                  onClick={() => onClose()}
                >
                  Submit
                </Button>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
        <Box display={"grid"} rowGap={5} p={".5rem"}>
          {Array.isArray(eCourses) &&
            eCourses.map((course, idx) => (
              <Card
                key={idx}
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
                direction={{ base: "row" }}
                height={{ base: "100px", sm: "initial" }}
              >
                <CardHeader
                  p={{ base: 3, md: 5 }}
                  pr={{ base: 0, sm: "initial" }}
                  flex={1}
                >
                  <Image
                    src={course.courseImg}
                    alt={course.courseName}
                    w={"100%"}
                    h={"100%"}
                    minW={"100px"}
                    alignSelf={"center"}
                    borderRadius={4}
                  />
                </CardHeader>
                <CardBody
                  flex={{ base: 4, xl: 5 }}
                  display={"flex"}
                  flexDirection={"column"}
                  rowGap={1}
                  p={{ base: 3, md: 5 }}
                  pr={{ md: 0 }}
                >
                  <Heading sx={textStyle} color={"#044F63"}>
                    {course.courseName}
                  </Heading>
                  <Grid>
                    <Text
                      fontSize={{ base: ".7rem", md: "xs", lg: "sm" }}
                      color={"#3c7356"}
                    >
                      {course.author}
                    </Text>
                    <Text
                      fontSize={{ base: ".7rem", md: "xs", lg: "sm" }}
                      color={"#3c7356"}
                    >
                      {course.courseRating}
                    </Text>
                    <Text
                      fontSize={{ base: ".7rem", md: "xs", lg: "sm" }}
                      color={"#3c7356"}
                      display={{ base: "none", sm: "flex" }}
                    >
                      {`₹${course.coursePrice.toLocaleString("en-IN")}`}
                    </Text>
                  </Grid>
                </CardBody>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MyCourses);
