"use client";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Box,
  Grid,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TCourse } from "../../../../public/courses";
import { getUserInfoFromLocalStorage } from "../navbar/Navbar";
import { fetchInstructorCourses } from "@/actions/instructor/action";

const textStyle = {
  fontSize: { base: "xs", lg: "md" },
};

const InstructorCoursesList = () => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  useEffect(() => {
    const instructor = getUserInfoFromLocalStorage();
    async function getInstructorCourses() {
      const data = await fetchInstructorCourses(instructor._id ?? "");
      setCourses(data);
    }
    getInstructorCourses();
  }, []);
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
    // <SimpleGrid
    //   spacing={5}
    //   templateColumns={{
    //     base: "repeat(auto-fill, minmax(200px, 1fr))",
    //     sm: "repeat(auto-fill, minmax(220px, 1fr))",
    //     xl: "repeat(auto-fill, minmax(220px, 1fr))",
    //   }}
    //   justifyContent={"center"}
    //   padding={".5rem"}
    // >
    //   {courses.map((course, idx) => (
    //     <Card
    //       key={idx}
    //       // h={{ sm: "370px", md: "315px" }}
    //       boxShadow={
    //         "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
    //       }
    //     >
    //       <CardHeader>
    //         <Image
    //           src={course.courseImg}
    //           alt={course.courseName}
    //           borderRadius="lg"
    //           w={"100%"}
    //           h={"100%"}
    //         />
    //       </CardHeader>
    //       <CardBody
    //         display={"flex"}
    //         flexDirection={"column"}
    //         justifyContent={"space-between"}
    //         paddingBlock={0}
    //       >
    //         <Heading size={{ base: "xs" }}>{course.courseName}</Heading>
    //         <Grid>
    //           <Text sx={textStyle} color={"#3c7356"}>
    //             {course.author}
    //           </Text>
    //           <Box display={"flex"} justifyContent={"space-between"}>
    //             <Text sx={textStyle}>{course.courseRating}</Text>
    //             <Text color="blue.600" sx={textStyle}>
    //               {course.coursePrice === 0
    //                 ? `Free`
    //                 : `₹ ${course.coursePrice.toLocaleString()}`}
    //             </Text>
    //           </Box>
    //         </Grid>
    //       </CardBody>
    //       <CardFooter
    //         paddingTop={2}
    //         paddingBottom={5}
    //         display={"grid"}
    //       ></CardFooter>
    //     </Card>
    //   ))}
    // </SimpleGrid>
    <Box display={"grid"} rowGap={5} p={".5rem"}>
      {courses.map((course, idx) => (
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
            <Heading sx={textStyle}>{course.courseName}</Heading>
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
  );
};

export default React.memo(InstructorCoursesList);
