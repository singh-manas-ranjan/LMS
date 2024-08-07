"use client";
import {
  Box,
  CardFooter,
  Text,
  Image,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { TUser } from "../navbar/Navbar";

type Props = {
  instructors: TUser[];
};

const textStyle = {
  fontSize: { base: "xs", md: "sm" },
};
const InstructorList = ({ instructors }: Props) => {
  return (
    <Box display={"grid"} rowGap={5} p={".5rem"}>
      {Array.isArray(instructors) &&
        instructors.map((instructor, idx) => (
          <Card
            key={instructor._id}
            color="teal"
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            direction={"row"}
            h={{ base: "100px", md: "150px" }}
            w={"100%"}
            alignItems={"center"}
            display={"flex"}
            columnGap={2}
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
            <CardBody
              p={1}
              pr={{ base: 3, md: 4 }}
              ml={{ md: 5 }}
              h={"100%"}
              paddingBlock={{ md: 4 }}
            >
              <Box
                h={"100%"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                rowGap={{ md: 2 }}
              >
                <Text sx={textStyle}>
                  {`${instructor.firstName} ${instructor.lastName}`}
                </Text>
                <Text sx={textStyle}>{instructor.email}</Text>
              </Box>
            </CardBody>

            <CardFooter
              h={"100%"}
              justifyContent={{ base: "space-between", sm: "center" }}
              alignItems={"end"}
              p={0}
              paddingRight={{ base: 3, md: 4 }}
            >
              <Box
                h={"100%"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={{ base: "center" }}
                alignItems={"center"}
                pr={{ md: 5 }}
              ></Box>
            </CardFooter>
          </Card>
        ))}
    </Box>
  );
};

export default React.memo(InstructorList);
