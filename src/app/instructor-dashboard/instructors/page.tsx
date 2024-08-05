import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import { TUser } from "@/app/ui/navbar/Navbar";
import { fetchAllUsers } from "@/actions/users/action";
import InstructorCard from "@/app/ui/dashboard/instructorDashboard/InstructorCard";

const main = {
  width: "100%",
  height: "100%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  overflow: "hidden",
};
const textStyle = {
  fontSize: { base: "xs", md: "sm" },
};
const Instructors = async () => {
  const instructors = await fetchAllUsers("instructors");

  return (
    <Box as="main" sx={main}>
      <Box
        w={"100%"}
        h={"100%"}
        p={".5rem"}
        color={"#044f63"}
        display={"flex"}
        flexDir={"column"}
        rowGap={3}
      >
        <Box>
          <Heading as="h2" size={{ base: "md" }} p={".5rem"}>
            Instructors
          </Heading>
        </Box>
        <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
          <Box display={"grid"} rowGap={5} p={".5rem"}>
            {Array.isArray(instructors) &&
              instructors.map((instructor, idx) => (
                <Card
                  key={idx}
                  color="teal"
                  boxShadow={
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                  }
                  direction={"row"}
                  h={{ base: "100px", md: "120px" }}
                  w={"100%"}
                  alignItems={"center"}
                >
                  <CardHeader
                    p={2}
                    pl={{ base: 3, md: 4 }}
                    h={{ base: "60%", md: "70%" }}
                    flexShrink={"unset"}
                  >
                    <Image
                      src={instructor.avatar}
                      alt={instructor.firstName}
                      borderRadius={"50%"}
                      w={"100%"}
                      h={"100%"}
                      minW={"0px"}
                    />
                  </CardHeader>
                  <CardBody p={1} pr={{ base: 3, md: 4 }} ml={{ md: 5 }}>
                    <Box
                      h={"100%"}
                      display={"flex"}
                      flexDir={"column"}
                      justifyContent={"center"}
                    >
                      <Text sx={textStyle}>
                        {`${instructor.firstName} ${instructor.lastName}`}
                      </Text>
                    </Box>
                  </CardBody>
                </Card>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Instructors;
