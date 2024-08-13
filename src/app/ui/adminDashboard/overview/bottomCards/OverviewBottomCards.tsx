import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Progress,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../../../public/scrollbarStyle";
import { TUser } from "@/app/ui/navbar/Navbar";

const headings = ["Students enrolled", "Popular tasks", "Group progress"];

type TPopularTasks = {
  name: string;
  participants: number;
};
export const popularTasks: TPopularTasks[] = [
  { name: "Build LMS", participants: 15 },
  { name: "Build Weather App", participants: 5 },
  { name: "Build E-Commerce", participants: 20 },
  { name: "Create Login/Registration page", participants: 3 },
  { name: "Create Stopwatch using React", participants: 8 },
];

type TGroup = {
  name: string;
  students: number;
  progress: number;
};

const groups: TGroup[] = [
  { name: "Group 1", students: 10, progress: 52 },
  { name: "Group 2", students: 20, progress: 75 },
  { name: "Group 3", students: 30, progress: 90 },
  { name: "Group 4", students: 17, progress: 40 },
  { name: "Group 5", students: 15, progress: 35 },
  { name: "Group 6", students: 25, progress: 15 },
];

interface Props {
  students: TUser[];
}
const OverviewBottomCards = ({ students }: Props) => {
  return (
    <Box
      w={"100%"}
      h={{ sm: "300", md: "fit-content" }}
      display={"grid"}
      p={".5rem"}
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr )" }}
      columnGap={5}
      overflowY={{ sm: "scroll", md: "unset" }}
      sx={sxScrollbar}
      rowGap={5}
    >
      {/* {headings.map((card, idx) => ( */}
      <Card
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <CardHeader
          display={{ base: "flex", lg: "table-column" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", sm: "baseline" }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={{ base: "sm" }}>{headings[0]}</Heading>
          </Flex>
        </CardHeader>
        <CardBody height={"fit-content"} pt={0}>
          <Box h={"250px"} w={"100%"}>
            <Accordion h={"100%"} overflowY={"scroll"} sx={sxScrollbar}>
              {Array.isArray(students) &&
                students.slice(0, 4).map((student, idx) => (
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
                            flexDirection={{ md: "column", lg: "row" }}
                            columnGap={{ base: ".5rem", md: "0" }}
                          >
                            <Avatar
                              name={`${student.firstName} ${student.lastName}`}
                              src={student.avatar}
                              boxSize={{ base: "2rem", lg: "2.5rem" }}
                            />
                            <Grid m={{ lg: 2 }} ml={{ lg: 5 }} width={"100%"}>
                              <Flex
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                width={"100%"}
                              >
                                <Text fontSize={{ base: "sm" }}>
                                  {`${student.firstName} ${student.lastName}`}
                                </Text>
                                <Box
                                  width={{ base: "20%" }}
                                  height={".33rem"}
                                  borderRadius={25}
                                >
                                  {/* <Progress
                                  value={student.courseCompletion}
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={25}
                                  colorScheme={"green"}
                                /> */}
                                </Box>
                              </Flex>
                              <Text
                                fontSize={{
                                  base: ".6rem",
                                  sm: ".75rem",
                                  lg: ".8rem",
                                }}
                                color={"#8D94A3"}
                              >
                                {}
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
        </CardBody>
      </Card>
      <Card
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <CardHeader
          display={{ base: "flex", lg: "table-column" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", sm: "baseline" }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={{ base: "sm" }}>{headings[1]}</Heading>
          </Flex>
        </CardHeader>
        <CardBody height={"fit-content"} pt={0}>
          <Box h={"250px"} w={"100%"}>
            <Accordion h={"100%"} overflowY={"scroll"} sx={sxScrollbar}>
              {popularTasks.map((task, idx) => (
                <AccordionItem key={idx}>
                  <Text>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <WrapItem>
                          <Grid m={2}>
                            <Text fontSize={{ base: "sm" }}>{task.name}</Text>
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
      <Card
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <CardHeader
          display={{ base: "flex", lg: "table-column" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", sm: "baseline" }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={{ base: "sm" }}>{headings[2]}</Heading>
          </Flex>
        </CardHeader>
        <CardBody height={"fit-content"} pt={0}>
          <Box h={"250px"} w={"100%"}>
            <Accordion h={"100%"} overflowY={"scroll"} sx={sxScrollbar}>
              {groups.map((group, idx) => (
                <AccordionItem key={idx}>
                  <Text>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <WrapItem
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Grid>
                            <Text fontSize={{ base: "sm" }}>{group.name}</Text>
                            <Text
                              fontSize={{
                                base: ".6rem",
                                sm: ".75rem",
                                lg: ".8rem",
                              }}
                              color={"#8D94A3"}
                            >{`No.of students : ${group.students}`}</Text>
                          </Grid>
                          <Box
                            width={{ base: "30%" }}
                            height={".33rem"}
                            borderRadius={25}
                          >
                            <Progress
                              value={group.progress}
                              width={"100%"}
                              height={"100%"}
                              borderRadius={25}
                              colorScheme={"blue"}
                            />
                          </Box>
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
      {/* ))} */}
    </Box>
  );
};

export default OverviewBottomCards;
