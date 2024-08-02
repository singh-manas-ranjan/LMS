import {
  Box,
  Card,
  CardBody,
  Image,
  Text,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import { TCourse } from "../../../../public/courses";
import { fetchAllCourses } from "@/actions/courses/actions";

const main = {
  width: "100%",
  height: "100vh",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const textStyle = {
  fontSize: { base: "sm" },
};
const AdminCourses = async () => {
  const coursesList: TCourse[] = await fetchAllCourses();
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar} p={5}>
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
          {coursesList.map((course, idx) => (
            <Card
              key={idx}
              // h={{ sm: "370px", md: "315px" }}
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
                justifyContent={"space-between"}
                paddingBlock={0}
              >
                <Heading size={{ base: "xs" }}>{course.courseName}</Heading>
                <Grid>
                  <Text sx={textStyle} color={"#3c7356"}>
                    {course.author}
                  </Text>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Text sx={textStyle}>{course.courseRating}</Text>
                    <Text color="blue.600" sx={textStyle}>
                      {course.coursePrice === 0
                        ? `Free`
                        : `₹ ${course.coursePrice.toLocaleString()}`}
                    </Text>
                  </Box>
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
      </Box>
    </Box>
  );
};

export default AdminCourses;
