import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Barchart from "../ui/dashboard/barchart/Barchart";
import studentRankings from "../../../public/rankingData";
import DashBoardCourses from "../ui/dashboard/dashboardCourses/DashBoardCourses";
import { sxScrollbar } from "../../../public/scrollbarStyle";

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

const Dashboard = async () => {
  return (
    <Box as="main" sx={main}>
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        overflowY={"scroll"}
        sx={sxScrollbar}
      >
        <Flex flex={{ xl: 6 }} flexDirection={"column"} p={"1rem"} rowGap={10}>
          <Box
            flex={{ xl: 5 }}
            borderRadius={8}
            bgColor={"#2D89BA"}
            position={"relative"}
            overflow={"hidden"}
          >
            <Flex p={"1rem"} color={"#fff"}>
              <Flex
                flexDirection={"column"}
                w={{ base: "100%", md: "65%", lg: "60%" }}
                p={".5rem"}
                h={"fit-content"}
                rowGap={4}
              >
                <Grid rowGap={3}>
                  <Heading fontSize={{ base: "2xl", lg: "2xl", xl: "3xl" }}>
                    New Exams available Now!
                  </Heading>
                  <Text
                    lineHeight={{ sm: "1.3rem", md: "1.7rem" }}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Welcome to our new exam to attend and check your results how
                    long are you practice for your papers, we provide the best
                    service for every one this platform boost your confidence.
                  </Text>
                </Grid>
                <Button
                  w={150}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  columnGap={2}
                  color={"#2D89BA"}
                >
                  Explore More <FaAngleRight size={18} />
                </Button>
              </Flex>
            </Flex>
            <Box
              position={"absolute"}
              right={{ md: -5, xl: 8 }}
              bottom={{ md: -3 }}
              display={{ base: "none", md: "grid" }}
            >
              <Image
                alt="teacher-avatar"
                src={
                  "https://res.cloudinary.com/learnopia/image/upload/v1722329722/teacher_cvj8gs.png"
                }
                width={{ md: 250 }}
              />
            </Box>
          </Box>
          <Box
            flex={6}
            borderRadius={8}
            bgColor={"#E8F5FE"}
            p={"1rem"}
            overflow={"hidden"}
          >
            <Flex
              flexDirection={"column"}
              h={"100%"}
              w={"100%"}
              rowGap={3}
              overflow={"hidden"}
              justifyContent={"space-around"}
            >
              <Flex justifyContent={"space-between"} paddingInline={2}>
                <Text color={"#2D89BA"}>Popular Courses</Text>
                <Link href={"/dashboard/courses"} style={{ color: "#2D89BA" }}>
                  View All
                </Link>
              </Flex>
              <DashBoardCourses />
            </Flex>
          </Box>
        </Flex>
        <Flex flex={2} flexDirection={"column"} p={"1rem"} rowGap={10}>
          <Box
            flex={{ base: 6, xl: 5 }}
            borderRadius={8}
            bgColor={"#E8F5FE"}
            position={"relative"}
            overflow={"hidden"}
            display={"flex"}
          >
            <Box
              w={"100%"}
              h={"100%"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              rowGap={3}
              overflow={"hidden"}
            >
              <Box
                color={"#2D89BA"}
                display={"flex"}
                justifyContent={"space-between"}
                p={".5rem"}
              >
                <Text>My ranking</Text>
                <Link href={"#"}>View All</Link>
              </Box>
              <Box overflowY={"scroll"} h={"100%"} w={"100%"} sx={sxScrollbar}>
                <Accordion allowToggle>
                  {studentRankings.map((student, idx) => (
                    <AccordionItem key={idx}>
                      <Text>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <WrapItem>
                              <Avatar
                                name={student.name}
                                src={student.imageSrc}
                              />
                              <Text m={2} ml={5} fontSize={{ base: "sm" }}>
                                {student.name}
                              </Text>
                            </WrapItem>
                          </Box>
                        </AccordionButton>
                      </Text>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </Box>
          </Box>
          <Box
            flex={6}
            borderRadius={8}
            bgColor={"#E8F5FE"}
            p={"1rem"}
            w={"100%"}
            h={"100%"}
          >
            <Barchart />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;
