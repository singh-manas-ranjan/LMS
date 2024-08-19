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
  params: { student_id: string };
}
const textStyle = {
  fontSize: { base: "sm" },
};

const MyCourses = async ({ params: { student_id } }: Props) => {
  const student: TUser | null = await fetchUserById(student_id, "students");
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
