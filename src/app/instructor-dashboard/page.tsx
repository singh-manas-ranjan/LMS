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
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import BannerCarousel from "../ui/bannerCarousel/BannerCarousel";
import { popularTasks } from "../ui/adminDashboard/overview/bottomCards/OverviewBottomCards";
import studentRankings, { TStudentRankings } from "../../../public/rankingData";
import InstructorDashboardCourses from "../ui/instructorDashboard/InstructorDashboardCourses";
import NextLink from "next/link";

const main = {
  width: "100%",
  height: "100%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  overflow: "scroll",
};

type TReview = {
  student: TStudentRankings;
  body: string;
};

const reviews: TReview[] = [
  {
    student: studentRankings[1],
    body: "I won't say much, but this is enough. 'I successfully delivered two projects over two and half years, completely based on this course'. Hats off to OmPrakashChavan.",
  },
  {
    student: studentRankings[4],
    body: "The professor takes his time to explain everything on detail, also he speaks very well and his english is perfectly understandable, you can understand everything .",
  },
  {
    student: studentRankings[2],
    body: "Parts of the course are outdated, but the practical lessons are very nice. Also, the teacher seems to answer every question very fast and it really seems like he is trying to solve your issue. His assistants are below average, though.",
  },
  {
    student: studentRankings[3],
    body: "Very useful tutorials and gave me confident setting things up and running.Thank you Omprakash.",
  },
  {
    student: studentRankings[0],
    body: "Out dated content. Waste of money.Poor video quality.Text of most of the videos were not clear.Although he explains well. This course is not for noobs.",
  },
];

const InstructorDashboard = async () => {
  return (
    <Box as="main" sx={main}>
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
          <BannerCarousel />
        </Flex>
        <Flex flex={2} flexDirection={"column"} p={".5rem"} rowGap={10}>
          <Box
            flex={6}
            borderRadius={8}
            position={"relative"}
            overflow={"hidden"}
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
                    <Heading size={{ base: "sm" }} color={"#2D2F31"}>
                      Active Students
                    </Heading>
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
                    <Heading size={{ base: "sm" }} color={"#2D2F31"}>
                      New Enrolment
                    </Heading>
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
                <NextLink href="/instructor-dashboard/courses">
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
                <InstructorDashboardCourses />
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
                <Heading size={{ base: "sm" }} color={"#2D2F31"}>
                  Student&apos;s Feedback
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
                w={"100%"}
                paddingInline={{ base: 0, md: "1rem" }}
              >
                <Box
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  flexDir={"column"}
                  rowGap={3}
                >
                  {reviews && (
                    <Box w={"100%"} h={"100%"}>
                      <Accordion h={"100%"}>
                        {reviews?.slice(0, 4).map((review, idx) => (
                          <AccordionItem key={idx}>
                            <Text>
                              <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                  <WrapItem
                                    display={"flex"}
                                    alignItems={{
                                      base: "center",
                                      md: "start",
                                      lg: "center",
                                    }}
                                    flexDirection={{
                                      md: "column",
                                      lg: "row",
                                    }}
                                    columnGap={{
                                      base: ".5rem",
                                      md: "0",
                                    }}
                                  >
                                    <Avatar
                                      name={review.student.name}
                                      src={review.student.imageSrc}
                                      boxSize={{
                                        base: "2rem",
                                        lg: "2.5rem",
                                      }}
                                    />
                                    <Grid
                                      m={{ lg: 2 }}
                                      ml={{ lg: 5 }}
                                      width={"100%"}
                                    >
                                      <Flex
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        width={"100%"}
                                      >
                                        <Text
                                          fontSize={{ base: "xs", md: "sm" }}
                                        >
                                          {review.student.name}
                                        </Text>
                                      </Flex>
                                      <Text
                                        fontSize={{
                                          base: ".6rem",
                                          sm: ".75rem",
                                          lg: ".8rem",
                                        }}
                                        color={"#8D94A3"}
                                      >
                                        {`${review.body.substring(0, 80)} ...`}
                                      </Text>
                                    </Grid>
                                  </WrapItem>
                                </Box>
                              </AccordionButton>
                            </Text>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </Box>
                  )}
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
            p={".5rem"}
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
                    {popularTasks.map((task, idx) => (
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

export default InstructorDashboard;
