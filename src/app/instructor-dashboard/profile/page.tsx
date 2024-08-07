"use client";
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
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Button,
  useDisclosure,
  HStack,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import { getUserInfoFromLocalStorage, TUser } from "@/app/ui/navbar/Navbar";
import { BiSolidEdit } from "react-icons/bi";
import UploadProfilePicBtn from "@/app/ui/dashboard/profile/UploadProfilePicBtn";

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

const InstructorProfile = () => {
  const [instructor, setInstructor] = useState({} as TUser);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const instructor = getUserInfoFromLocalStorage();
    setInstructor(instructor);
    setLoading(false);
  }, []);

  return (
    <Box as="main" sx={main} overflow={"hidden"}>
      <Box
        display={"flex"}
        justifyContent={"end"}
        alignItems={"center"}
        columnGap={2}
        pr={5}
        pb={3}
      >
        <Text fontSize={"xs"} color="#044F63">
          Update
        </Text>
        <Button
          onClick={onOpen}
          display={"grid"}
          placeItems={"center"}
          boxSize={10}
          borderRadius={"50%"}
          bgColor={"#F4F3F3"}
          transition={".3s ease-in-out"}
          _hover={{ bg: "#E2E8F0" }}
        >
          <BiSolidEdit style={{ borderRadius: "50%" }} color="#364A63" />
        </Button>
      </Box>
      <Box
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        overflowX={"hidden"}
        sx={sxScrollbar}
      >
        <Box p={"1rem"} w={"100%"}>
          {loading ? (
            <Box
              padding="6"
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              bg="white"
              borderRadius={4}
            >
              <SkeletonCircle size="50" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          ) : (
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
                  w={"100%"}
                  borderRadius={6}
                  //   outline={"5px solid"}
                  //   outlineColor={
                  //     "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                  //   }

                  boxShadow={
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                  }
                />
                <Box
                  position={"relative"}
                  top={{ base: "30%", md: "40%" }}
                  right={{ base: "1rem" }}
                  display={"grid"}
                  placeItems={"center"}
                >
                  <UploadProfilePicBtn user="INSTRUCTORS" />
                </Box>
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
                >
                  <Heading size={{ base: "xs", md: "sm", lg: "md" }}>
                    {`${instructor.firstName} ${instructor.lastName}`}
                  </Heading>
                  <Grid color={"#77838F"} rowGap={{ base: 1 }} mt={1}>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                      {instructor.domain}
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                      {instructor.address}
                    </Text>
                  </Grid>
                </Box>
              </CardBody>
            </Card>
          )}
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
            {loading ? (
              <Card
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
                w={"100%"}
                p={{ base: 3, sm: 5 }}
              >
                <Stack p={0}>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </Card>
            ) : (
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
                  <Heading size={{ base: "sm", xl: "md" }}>About Me</Heading>
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
            )}
            {loading ? (
              <Card
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
                w={"100%"}
                p={{ base: 3, sm: 5 }}
              >
                <Stack p={0}>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </Card>
            ) : (
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
                  <Heading size={{ base: "sm", xl: "md" }}>Education</Heading>
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
                          <AccordionButton>
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
                                  >
                                    {education.degree}
                                  </Text>
                                  <Text fontSize={".6rem"} color={"#77838F"}>
                                    {education.institution}
                                  </Text>
                                </Grid>
                                <Text fontSize={".6rem"} color={"#77838F"}>
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
            )}
            {loading ? (
              <Card
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
                w={"100%"}
                p={{ base: 3, sm: 5 }}
              >
                <Stack p={0}>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </Card>
            ) : (
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
                  <Heading size={{ base: "sm", xl: "md" }}>
                    Work Experience
                  </Heading>
                </CardHeader>
                <CardBody
                  display={"flex"}
                  flexDirection={"column"}
                  rowGap={1}
                  p={3}
                >
                  <Text fontSize={{ base: "xs", lg: "sm" }} color={"#77838F"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima eligendi qui expedita modi ex est quo illum inventore
                    ad ipsa!
                  </Text>
                </CardBody>
              </Card>
            )}
            {loading ? (
              <Card
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
                w={"100%"}
                p={{ base: 3, sm: 5 }}
              >
                <Stack p={0}>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </Card>
            ) : (
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
                  <Heading size={{ base: "sm", xl: "md" }}>
                    Available Timings
                  </Heading>
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
                              <Text
                                fontSize={{ base: "sm", xl: "md" }}
                                color="#044F63"
                              >
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
            )}
          </Box>
          {!loading && (
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
                  <Heading size={{ base: "sm", xl: "md" }}>
                    Offered Services
                  </Heading>
                </CardHeader>
                <CardBody
                  display={"flex"}
                  flexDirection={"column"}
                  rowGap={2}
                  p={3}
                  paddingInline={0}
                >
                  {instructor.services?.map((service, idx) => (
                    <HStack key={idx}>
                      <Button key={idx} size={"sm"} color="#044F63">
                        {service}
                      </Button>
                    </HStack>
                  ))}
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
                  <Heading size={{ base: "sm", xl: "md" }}>Languages</Heading>
                </CardHeader>
                <CardBody
                  display={"flex"}
                  flexDirection={"row"}
                  rowGap={1}
                  columnGap={2}
                  p={3}
                  paddingInline={0}
                >
                  {instructor.languages?.map((language, idx) => (
                    <HStack key={idx}>
                      <Button key={idx} size={"sm"} color="#044F63">
                        {language}
                      </Button>
                    </HStack>
                  ))}
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
                  <Heading size={{ base: "sm", xl: "md" }}>Location</Heading>
                </CardHeader>
                <CardBody
                  display={"flex"}
                  flexDirection={"column"}
                  rowGap={1}
                  p={3}
                >
                  <Text fontSize={{ base: "xs", lg: "sm" }} color={"#77838F"}>
                    {instructor.address}
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
                  <Heading size={{ base: "sm", xl: "md" }}>
                    Awards and Recognitions
                  </Heading>
                </CardHeader>
                <CardBody
                  display={"flex"}
                  flexDirection={"column"}
                  rowGap={1}
                  p={3}
                >
                  <Text fontSize={{ base: "xs", lg: "sm" }} color={"#77838F"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima eligendi qui expedita modi ex est quo illum inventore
                    ad ipsa!
                  </Text>
                </CardBody>
              </Card>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(InstructorProfile);
