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
import React from "react";
import { sxScrollbar } from "../../../../../../public/scrollbarStyle";
import { TUser } from "@/app/ui/navbar/Navbar";
import { fetchUserById } from "@/actions/adminAccess/adminAccessAction";

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
  params: { instructor_id: string };
}
const textStyle = {
  fontSize: { base: "sm" },
};

const MyPublishedCourses = async ({ params: { instructor_id } }: Props) => {
  const instructor: TUser | null = await fetchUserById(
    instructor_id,
    "instructors"
  );
  const courses = instructor?.publishedCourses;
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
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
      </Box>
    </Box>
  );
};

export default MyPublishedCourses;
