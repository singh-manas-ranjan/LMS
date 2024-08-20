"use client";
import {
  Box,
  CardHeader,
  Heading,
  SimpleGrid,
  Image,
  Text,
  CardBody,
  CardFooter,
  Grid,
  Card,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sxScrollbar } from "../../../../../../public/scrollbarStyle";
import { TUser } from "@/app/ui/navbar/Navbar";
import { fetchUserById } from "@/actions/adminAccess/adminAccessAction";
import axios from "axios";

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
const textStyle = {
  fontSize: { base: "sm" },
};

const MyCourses = ({ params: { student_id } }: Props) => {
  const [student, setStudent] = useState<TUser>({} as TUser);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://learnopia-backend.vercel.app/api/v1/admin/access/students/${student_id}`,
          // `http://localhost:3131/api/v1/admin/access/students/${student_id}`,
          {
            withCredentials: true,
          }
        );
        setStudent(response.data.body);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [student_id]);
  const eCourses = student?.enrolledCourses;
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
        <Box w={"100%"} h={"100%"}>
          {Array.isArray(eCourses) && eCourses.length !== 0 ? (
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
              {eCourses.map((course, idx) => (
                <Card
                  key={idx}
                  // h={{ base: "fit-content", sm: "370px", md: "315px" }}
                  boxShadow={
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                  }
                >
                  <CardHeader>
                    <Image
                      src={course.courseImg}
                      alt={course.courseName}
                      borderRadius="lg"
                      w={"100%"}
                      h={"100%"}
                    />
                  </CardHeader>
                  <CardBody
                    display={"flex"}
                    flexDirection={"column"}
                    // rowGap={3}
                    paddingBlock={0}
                  >
                    <Heading size={{ base: "xs" }}>{course.courseName}</Heading>
                    <Grid rowGap={2}>
                      <Text sx={textStyle} color={"#3c7356"}>
                        {course.author}
                      </Text>
                      <Text sx={textStyle}>{course.courseRating}</Text>
                    </Grid>
                  </CardBody>
                  <CardFooter
                    paddingTop={2}
                    paddingBottom={5}
                    display={"grid"}
                  ></CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          ) : (
            eCourses?.length === 0 && (
              <Box w={"100%"} h={"100%"} display={"grid"} placeItems={"center"}>
                <Heading>No courses found</Heading>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MyCourses;
