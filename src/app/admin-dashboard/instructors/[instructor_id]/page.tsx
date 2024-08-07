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
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../../public/scrollbarStyle";

const main = {
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: {
    base: "2rem .5rem 0",
    sm: "2rem",
    md: "2rem",
    lg: "3rem 4rem 0rem 4rem",
    xl: "3rem 5rem 0rem 5rem",
  },
  bg: "#ffffff",
  color: "#364A63",
};

const textStyle = {
  fontSize: { base: "xs", xl: "sm" },
};

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
            <CardHeader color="#044F63" p={{ base: 2.5, sm: 5 }} pl={4}>
              <Image
                src={instructor.avatar}
                alt={instructor.firstName}
                h={"100%"}
                w={"100%"}
                borderRadius={"50%"}
                //   outline={"5px solid"}
                //   outlineColor={
                //     "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                //   }
                p={3}
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
              />
            </CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 8 }}
              pr={{ base: 5 }}
              textAlign={{ base: "right", md: "initial" }}
            >
              <Heading size={{ base: "xs", sm: "md" }}>
                {`${instructor.firstName} ${instructor.lastName}`}
              </Heading>
              <Grid color={"#77838F"}>
                <Text fontSize={{ base: "xs", sm: "sm" }}>Subject</Text>
                <Text fontSize={{ base: "xs", sm: "sm" }}>Address</Text>
              </Grid>
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
                <Heading size={{ base: "sm", xl: "md" }}>About Me</Heading>
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
              >
                <Text fontSize={{ base: "xs", lg: "sm" }} color={"#77838F"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima eligendi qui expedita modi ex est quo illum inventore
                  ad ipsa!
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
              ></CardBody>
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
                <Heading size={{ base: "sm", xl: "md" }}>
                  Offered Services
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima eligendi qui expedita modi ex est quo illum inventore
                  ad ipsa!
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
        </Box>
      </Box>
    </Box>
  );
};

export default AdminInstructorDetail;
