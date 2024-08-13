import { fetchInstructorById } from "@/actions/instructor/action";
import {
  Box,
  Heading,
  Card,
  CardHeader,
  Image,
  CardBody,
  Grid,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  WrapItem,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../../public/scrollbarStyle";
import { BookAIcon, MailCheckIcon, MapIcon, MedalIcon } from "lucide-react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const main = {
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: {
    base: "1rem .5rem 0",
    sm: "2rem",
    md: "2rem",
    lg: "3rem 4rem 0rem 4rem",
    xl: "3rem 5rem 0rem 5rem",
  },
  bg: "#ffffff",
  color: "#364A63",
};

type TAvailable = {
  day: string;
};

const availableTimings: TAvailable[] = [
  { day: "Monday" },
  { day: "Tuesday" },
  { day: "Wednesday" },
  { day: "Thursday" },
  { day: "Friday" },
  { day: "Saturday" },
];

const timings = [
  "11:00am",
  "12:00pm",
  "01:00pm",
  "02:00pm",
  "03:00pm",
  "04:00pm",
];

const AdminInstructorDetail = async ({
  params,
}: {
  params: { instructor_id: string };
}) => {
  const instructor = await fetchInstructorById(atob(params.instructor_id));

  return (
    <Box as="main" sx={main} overflow={"hidden"}>
      <Box
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        overflowX={"hidden"}
        sx={sxScrollbar}
      >
        <Box p={"1rem"} w={"100%"}>
          <Card
            color="#044F63"
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            direction={"row"}
            h={{ base: "100px", sm: "150px", md: "200px" }}
            w={"100%"}
          >
            <CardHeader
              color="#044F63"
              p={{ base: 2.5, sm: 5 }}
              pl={{ md: 4 }}
              display={"flex"}
              alignItems={"center"}
            >
              <Image
                src={instructor.avatar ?? "/avatar.svg"}
                alt={instructor.firstName}
                h={{ base: "80%", md: "100%" }}
                w={"auto"}
                borderRadius={6}
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
              />
            </CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              alignItems={"center"}
              h={"100%"}
              w={"100%"}
              flexDirection={"column"}
              rowGap={1}
              pl={{ base: 0, md: 6 }}
            >
              <Box
                textAlign={{ base: "right", md: "initial" }}
                h={"100%"}
                w={"100%"}
                display={"flex"}
                justifyContent={"center"}
                flexDir={"column"}
                rowGap={{ md: 1 }}
              >
                <Heading
                  size={{ base: "xs", md: "md" }}
                  display={"flex"}
                  columnGap={2}
                  width={"100%"}
                  justifyContent={{ base: "end", md: "initial" }}
                >
                  {`${instructor.firstName} ${instructor.lastName}`}
                  <RiVerifiedBadgeFill size={20} color="green" />
                </Heading>
                <Flex
                  flexDirection={"column"}
                  alignItems={{ base: "end", md: "initial" }}
                  color={"#77838F"}
                  rowGap={{ base: 1 }}
                  mt={1}
                >
                  <Box display={"flex"} columnGap={2}>
                    <Box display={{ base: "none", md: "flex" }}>
                      <BookAIcon size={18} />
                    </Box>
                    <Text fontSize={{ base: "xs", lg: "sm" }} display={"flex"}>
                      {instructor.domain}
                    </Text>
                  </Box>
                  <Box display={"flex"} columnGap={2}>
                    <Box display={{ base: "none", md: "flex" }}>
                      <MailCheckIcon size={18} />
                    </Box>
                    <Text fontSize={{ base: "xs", lg: "sm" }} display={"flex"}>
                      {instructor.email}
                    </Text>
                  </Box>
                  {Object.values(instructor.address).every(
                    (item) => item !== ""
                  ) && (
                    <Box display={{ base: "none", sm: "flex" }} columnGap={2}>
                      <Box display={{ base: "none", md: "flex" }}>
                        <MapIcon size={18} />
                      </Box>
                      <Text
                        fontSize={{ base: "xs", lg: "sm" }}
                        display={"flex"}
                      >
                        {`${instructor.address?.addressLine1}, ${instructor.address?.addressLine2}, ${instructor.address?.state}, ${instructor.address?.country}`}
                      </Text>
                    </Box>
                  )}
                </Flex>
              </Box>
            </CardBody>
          </Card>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          columnGap={8}
          p={"1rem"}
          // overflowY={"scroll"}
          rowGap={5}
        >
          <Box
            flex={{ md: 4 }}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            flexDir={"column"}
            rowGap={5}
          >
            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>About Me</Heading>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={1}
                p={3}
              >
                <Text fontSize={{ base: "xs", lg: "sm" }} color={"#77838F"}>
                  {instructor.aboutMe}
                </Text>
              </CardBody>
            </Card>

            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>Education</Heading>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={1}
                p={3}
                paddingInline={0}
              >
                <Accordion h={"100%"}>
                  {instructor?.education?.map((education, idx) => (
                    <AccordionItem key={idx}>
                      <Text>
                        <AccordionButton cursor={"default"}>
                          <Box as="span" flex="1" textAlign="left">
                            <WrapItem
                              display={"flex"}
                              flexDir={"row"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              <Grid>
                                <Text
                                  fontSize={{ base: "xs", md: "sm" }}
                                  color="#044F63"
                                >
                                  {education.degree}
                                </Text>
                                <Text fontSize={".7rem"} color={"#77838F"}>
                                  {education.institution}
                                </Text>
                              </Grid>
                              <Text fontSize={".7rem"} color={"#77838F"}>
                                {education.passingYear}
                              </Text>
                            </WrapItem>
                          </Box>
                        </AccordionButton>
                      </Text>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardBody>
            </Card>

            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>Work Experience</Heading>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={1}
                p={3}
                paddingInline={0}
              >
                <Accordion h={"100%"}>
                  {instructor?.experience?.map((exp, idx) => (
                    <AccordionItem key={idx}>
                      <Text>
                        <AccordionButton cursor={"default"}>
                          <Box as="span" flex="1" textAlign="left">
                            <WrapItem
                              display={"flex"}
                              flexDir={"row"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              <Grid>
                                <Text
                                  fontSize={{ base: "xs", md: "sm" }}
                                  color="#044F63"
                                >
                                  {exp.organization}
                                </Text>
                                <Text fontSize={".7rem"} color={"#77838F"}>
                                  {exp.role}
                                </Text>
                              </Grid>
                              <Text fontSize={".7rem"} color={"#77838F"}>
                                {`${exp.years} yrs.`}
                              </Text>
                            </WrapItem>
                          </Box>
                        </AccordionButton>
                      </Text>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardBody>
            </Card>

            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>Available Timings</Heading>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={1}
                p={3}
                paddingInline={0}
              >
                <Accordion
                  allowToggle
                  display={"flex"}
                  flexDir={"column"}
                  rowGap={3}
                >
                  {availableTimings.map((avail, idx) => (
                    <AccordionItem
                      key={idx}
                      borderRadius={4}
                      bgColor={"#F4F3F3"}
                    >
                      <Text>
                        <AccordionButton borderRadius={4}>
                          <Box as="span" flex="1" textAlign="left">
                            <Text fontSize={{ base: "sm" }} color="#044F63">
                              {avail.day}
                            </Text>
                          </Box>
                          <AccordionIcon color="#044F63" />
                        </AccordionButton>
                      </Text>
                      <AccordionPanel pb={4} bg={"#fff"}>
                        <Box
                          w={"100%"}
                          display={"flex"}
                          columnGap={3}
                          rowGap={3}
                          flexWrap={"wrap"}
                          mt={2}
                        >
                          {timings.map((time, idx) => (
                            <Button
                              key={idx}
                              size={"sm"}
                              width={"80px"}
                              fontSize={{ base: "xs" }}
                              color={"#77838F"}
                              borderRadius={2}
                            >
                              {time}
                            </Button>
                          ))}
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardBody>
            </Card>
          </Box>
          <Box
            flex={{ md: 2.5, lg: 2 }}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            flexDir={"column"}
            rowGap={5}
          >
            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>Offered Services</Heading>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={2}
                p={3}
                paddingInline={0}
                pb={0}
              >
                <HStack
                  w={"100%"}
                  display={"flex"}
                  flexWrap={"wrap"}
                  columnGap={2}
                  rowGap={2}
                >
                  {instructor.services?.map((service, idx) => (
                    <Button
                      key={idx}
                      size={"xs"}
                      color="#044F63"
                      borderRadius={4}
                    >
                      {service}
                    </Button>
                  ))}
                </HStack>
              </CardBody>
            </Card>

            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>Languages</Heading>
              </CardHeader>
              <CardBody display={"flex"} paddingInline={0} p={3} pb={0}>
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  flexWrap={"wrap"}
                  flexDirection={"row"}
                  rowGap={2}
                  columnGap={2}
                  paddingInline={0}
                  w={"100%"}
                  h={"100%"}
                >
                  {instructor.languages?.map((language, idx) => (
                    <Button
                      key={idx}
                      size={"xs"}
                      color="#044F63"
                      borderRadius={4}
                    >
                      {language}
                    </Button>
                  ))}
                </Box>
              </CardBody>
            </Card>

            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>Location</Heading>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={1}
                p={3}
                paddingInline={1}
                pb={0}
              >
                <Box
                  display={"flex"}
                  columnGap={2}
                  w={"100%"}
                  alignItems={"center"}
                  color="#044F63"
                >
                  <MapIcon size={16} />
                  <Text
                    fontSize={{ base: "xs" }}
                  >{`${instructor.address?.addressLine1}, ${instructor.address?.addressLine2}, ${instructor.address?.state}, ${instructor.address?.country}`}</Text>
                </Box>
              </CardBody>
            </Card>

            <Card
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              w={"100%"}
              p={{ base: 3, sm: 5 }}
            >
              <CardHeader
                color="#044F63"
                p={4}
                borderRadius={4}
                bgColor={"#F4F3F3"}
              >
                <Heading size={{ base: "sm" }}>Awards and Recognitions</Heading>
              </CardHeader>
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                rowGap={1}
                p={3}
                paddingInline={0}
                pb={0}
              >
                <Accordion h={"100%"}>
                  {instructor?.achievements
                    ?.sort((a, b) => {
                      return Number(b.year) - Number(a.year);
                    })
                    .map((achievement, idx) => (
                      <AccordionItem key={idx}>
                        <Text>
                          <AccordionButton cursor={"default"} paddingInline={1}>
                            <Box as="span" flex="1" textAlign="left">
                              <WrapItem
                                display={"flex"}
                                flexDir={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                              >
                                <Grid>
                                  <Text
                                    fontSize={{ base: "xs" }}
                                    color="#044F63"
                                    display={"flex"}
                                    alignItems={"center"}
                                    columnGap={2}
                                  >
                                    <MedalIcon size={16} />
                                    {achievement.title}
                                  </Text>
                                </Grid>
                                <Text
                                  fontSize={{ base: "xs" }}
                                  color={"#77838F"}
                                >
                                  {`${achievement.year}`}
                                </Text>
                              </WrapItem>
                            </Box>
                          </AccordionButton>
                        </Text>
                      </AccordionItem>
                    ))}
                </Accordion>
              </CardBody>
            </Card>
          </Box>
          {/* )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminInstructorDetail;
