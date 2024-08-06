import { fetchInstructorById, TInstructor } from "@/actions/instructor/action";
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

const main = {
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: { base: "1rem", lg: "1rem 2rem 1rem 2rem" },
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
    <Box as="main" sx={main} overflowY={"scroll"} overflowX={"hidden"}>
      <Box p={"1rem"} w={"100%"}>
        <Card
          color="teal"
          boxShadow={
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
          }
          direction={"row"}
          h={{ base: "100px", sm: "150px", md: "200px" }}
          w={"100%"}
        >
          <CardHeader p={{ base: 2.5, sm: 5 }} pl={4}>
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
            pr={{ base: 4 }}
            textAlign={{ base: "right", md: "initial" }}
          >
            <Heading size={{ base: "xs", sm: "md" }}>
              {`${instructor.firstName} ${instructor.lastName}`}
            </Heading>
            <Grid>
              <Text fontSize={{ base: "xs", sm: "sm" }} color={"#3c7356"}>
                Subject
              </Text>
              <Text fontSize={{ base: "xs", sm: "sm" }} color={"#3c7356"}>
                Address
              </Text>
            </Grid>
          </CardBody>
        </Card>
      </Box>
      <Box
        width={"100%"}
        h={"100%"}
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
            h={{ base: "100px", sm: "150px", md: "200px" }}
            w={"100%"}
            p={5}
          >
            <CardHeader p={2.5} pl={4}></CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 5 }}
              pr={{ base: 4 }}
              textAlign={{ base: "right", sm: "initial" }}
            ></CardBody>
          </Card>
          <Card
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            h={{ base: "100px", sm: "150px", md: "200px" }}
            w={"100%"}
            p={5}
          >
            <CardHeader p={2.5} pl={4}></CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 5 }}
              pr={{ base: 4 }}
              textAlign={{ base: "right", sm: "initial" }}
            ></CardBody>
          </Card>
          <Card
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            h={{ base: "100px", sm: "150px", md: "200px" }}
            w={"100%"}
            p={5}
          >
            <CardHeader p={2.5} pl={4}></CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 5 }}
              pr={{ base: 4 }}
              textAlign={{ base: "right", sm: "initial" }}
            ></CardBody>
          </Card>
          <Card
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            h={{ base: "100px", sm: "150px", md: "200px" }}
            w={"100%"}
            p={5}
          >
            <CardHeader p={2.5} pl={4}></CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 5 }}
              pr={{ base: 4 }}
              textAlign={{ base: "right", sm: "initial" }}
            ></CardBody>
          </Card>
        </Box>
        <Box
          flex={{ md: 2 }}
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
            p={5}
          >
            <CardHeader p={2.5} pl={4}></CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 5 }}
              pr={{ base: 4 }}
              textAlign={{ base: "right", sm: "initial" }}
            ></CardBody>
          </Card>
          <Card
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            w={"100%"}
            p={5}
          >
            <CardHeader p={2.5} pl={4}></CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 5 }}
              pr={{ base: 4 }}
              textAlign={{ base: "right", sm: "initial" }}
            ></CardBody>
          </Card>
          <Card
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            w={"100%"}
            p={5}
          >
            <CardHeader p={2.5} pl={4}></CardHeader>
            <CardBody
              flex={{ base: 4, xl: 5 }}
              display={"flex"}
              flexDirection={"column"}
              rowGap={1}
              p={{ base: 3, sm: 5 }}
              pr={{ base: 4 }}
              textAlign={{ base: "right", sm: "initial" }}
            ></CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminInstructorDetail;
