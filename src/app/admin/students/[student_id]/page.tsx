// import { fetchStudentById } from "@/actions/adminAccess/studentAction";
// import { TUser } from "@/app/ui/navbar/Navbar";
// import { Box, Heading } from "@chakra-ui/react";
// import axios from "axios";
// import { cookies } from "next/headers";

// interface Props {
//   params: { student_id: string };
// }
// const AdminStudentDashboard = async ({ params: { student_id } }: Props) => {
//   const student: TUser | null = await fetchStudentById(student_id);
//   return (
//     <Box
//       w={"100%"}
//       h={"100%"}
//       margin={"auto"}
//       bg={"#fff"}
//       borderRadius={4}
//       p={5}
//     >
//       <Heading>
//         {student?._id
//           ? `${student.firstName} ${student.lastName}`
//           : "Admin Student Dashboard"}
//       </Heading>
//     </Box>
//   );
// };

// export default AdminStudentDashboard;

import {
  Box,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Link,
  Accordion,
  AccordionButton,
  AccordionItem,
  Grid,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { fetchUserById } from "@/actions/adminAccess/adminAccessAction";
import { TUser } from "@/app/ui/navbar/Navbar";
import { popularTasks } from "@/app/ui/adminDashboard/overview/bottomCards/OverviewBottomCards";
import StudentDashboardBannerCarousel from "@/app/ui/adminDashboard/studentBannerCarousel/StudentDashboardBannerCarousel";
import { sxScrollbar } from "../../../../../public/scrollbarStyle";

interface Props {
  params: { student_id: string };
}
const AdminStudentDashboard = async ({ params: { student_id } }: Props) => {
  const student: TUser = await fetchUserById(student_id, "students");
  return (
    <Box
      as="main"
      w={"100%"}
      h={"100%"}
      bg={"#fff"}
      borderRadius={"4px"}
      display={"flex"}
      flexDir={"column"}
      p={"1rem"}
      overflow={"scroll"}
      sx={sxScrollbar}
    >
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <Flex
          flex={6}
          flexDirection={"column"}
          p={"1rem"}
          rowGap={10}
          display={"grid"}
        >
          <StudentDashboardBannerCarousel />
        </Flex>
        <Flex flex={2} flexDirection={"column"} p={".5rem"} rowGap={10}>
          <Box
            flex={6}
            borderRadius={8}
            position={"relative"}
            overflow={"hidden"}
            sx={sxScrollbar}
          >
            <Box
              display={"flex"}
              flexDir={{ base: "column", sm: "row", xl: "column" }}
              width={"100%"}
              p={".5rem"}
              h={"100%"}
              justifyContent={"space-between"}
              columnGap={5}
              rowGap={5}
            >
              <Box width={"100%"} h={{ xl: "47%" }}>
                <Card
                  h={"100%"}
                  boxShadow={
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                  }
                >
                  <CardHeader
                    display={{ base: "flex", lg: "table-column" }}
                    justifyContent={{ base: "space-between" }}
                    alignItems={{ base: "center", sm: "baseline" }}
                  >
                    <Heading size={{ base: "sm" }} color={"#2D2F31"}></Heading>
                  </CardHeader>
                  <CardBody
                    display={"flex"}
                    flexDirection={"column"}
                    rowGap={2}
                    paddingTop={0}
                  ></CardBody>
                </Card>
              </Box>
              <Box width={"100%"} h={{ xl: "47%" }}>
                <Card
                  h={"100%"}
                  boxShadow={
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                  }
                >
                  <CardHeader
                    display={{ base: "flex", lg: "table-column" }}
                    justifyContent={{ base: "space-between" }}
                    alignItems={{ base: "center", sm: "baseline" }}
                  >
                    <Heading size={{ base: "sm" }} color={"#2D2F31"}></Heading>
                  </CardHeader>
                  <CardBody
                    display={"flex"}
                    flexDirection={"column"}
                    rowGap={2}
                    paddingTop={0}
                  ></CardBody>
                </Card>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <Flex flex={2} flexDirection={"column"} p={".5rem"} rowGap={10}>
          <Box
            flex={6}
            borderRadius={8}
            position={"relative"}
            overflow={"hidden"}
            p={".5rem"}
            sx={sxScrollbar}
          >
            <Card
              h={"100%"}
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
            >
              <CardHeader
                display={{ base: "flex" }}
                justifyContent={{ base: "space-between" }}
                alignItems={{ base: "center", sm: "baseline" }}
              >
                <Heading size={{ base: "sm" }} color={"#2D2F31"}>
                  My Courses
                </Heading>
                <NextLink href={`/admin/students/${student_id}/courses`}>
                  <Text color={"#2D89BA"} fontSize={{ base: "sm" }}>
                    View All
                  </Text>
                </NextLink>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={2}
                paddingTop={0}
                paddingInline={{ base: 0, md: "1rem" }}
              >
                <Box h={"100%"} w={"100%"}>
                  <Accordion h={"100%"}>
                    {student.enrolledCourses?.slice(0, 4).map((course, idx) => (
                      <AccordionItem key={idx}>
                        <Text>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <WrapItem>
                                <Grid m={2}>
                                  <Text fontSize={{ base: "xs", md: "sm" }}>
                                    {course.courseName}
                                  </Text>
                                  <Text
                                    fontSize={{
                                      base: "xs",
                                      md: "sm",
                                    }}
                                    color={"#8D94A3"}
                                  >{`Rating: ${course.courseRating}`}</Text>
                                </Grid>
                              </WrapItem>
                            </Box>
                          </AccordionButton>
                        </Text>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </Flex>
        <Flex flex={2} flexDirection={"column"} p={".5rem"} rowGap={10}>
          <Box
            flex={6}
            borderRadius={8}
            position={"relative"}
            overflow={"hidden"}
            sx={sxScrollbar}
            p={".5rem"}
          >
            <Card
              h={"100%"}
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
            >
              <CardHeader
                display={"flex"}
                justifyContent={{ base: "space-between" }}
                alignItems={{ base: "center", sm: "baseline" }}
              >
                <Heading size={{ base: "sm" }} color={"#2D2F31"}></Heading>
                <Link color={"#2D89BA"} fontSize={{ base: "sm" }}>
                  View All
                </Link>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={2}
                paddingTop={0}
                w={"100%"}
                paddingInline={{ base: 0, md: "1rem" }}
              >
                <Box
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  flexDir={"column"}
                  rowGap={3}
                ></Box>
              </CardBody>
            </Card>
          </Box>
        </Flex>
        <Flex flex={2} flexDirection={"column"} p={".5rem"} rowGap={10}>
          <Box
            flex={6}
            borderRadius={8}
            position={"relative"}
            overflow={"hidden"}
            p={".5rem"}
            sx={sxScrollbar}
          >
            <Card
              h={"100%"}
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
            >
              <CardHeader
                display={{ base: "flex" }}
                justifyContent={{ base: "space-between" }}
                alignItems={{ base: "center", sm: "baseline" }}
              >
                <Heading size={{ base: "sm" }} color={"#2D2F31"}>
                  Tasks
                </Heading>
                <Link color={"#2D89BA"} fontSize={{ base: "sm" }}>
                  View All
                </Link>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={2}
                paddingTop={0}
                paddingInline={{ base: 0, md: "1rem" }}
              >
                <Box h={"100%"} w={"100%"}>
                  <Accordion h={"100%"}>
                    {popularTasks.slice(0, 4).map((task, idx) => (
                      <AccordionItem key={idx}>
                        <Text>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <WrapItem>
                                <Grid m={2}>
                                  <Text fontSize={{ base: "xs", md: "sm" }}>
                                    {task.name}
                                  </Text>
                                  <Text
                                    fontSize={{
                                      base: ".6rem",
                                      sm: ".75rem",
                                      lg: ".8rem",
                                    }}
                                    color={"#8D94A3"}
                                  >{`${task.participants} students participated`}</Text>
                                </Grid>
                              </WrapItem>
                            </Box>
                          </AccordionButton>
                        </Text>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AdminStudentDashboard;
