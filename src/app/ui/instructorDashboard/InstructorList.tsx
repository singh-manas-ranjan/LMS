"use client";
import {
  Box,
  CardFooter,
  Text,
  Card,
  CardBody,
  CardHeader,
  Link,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUserInfoFromLocalStorage, TUser } from "../navbar/Navbar";
import NextLink from "next/link";
import Image from "next/image";

type Props = {
  instructors: TUser[];
};

const textStyle = {
  fontSize: { base: "xs", md: "sm" },
};
const InstructorList = ({ instructors }: Props) => {
  const [instructorId, setInstructorId] = useState("");
  useEffect(() => {
    const instructor = getUserInfoFromLocalStorage();
    setInstructorId(instructor._id ?? "");
  }, []);

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
            h={{ base: "100px", md: "110px" }}
            w={"100%"}
            alignItems={"center"}
            display={"flex"}
            columnGap={2}
          >
            <CardHeader
              p={0}
              pl={{ base: 3, md: 5 }}
              // h={{ base: "60%", md: "70%" }}
              flexShrink={"unset"}
            >
              <Image
                src={instructor.avatar ?? "/avatar.svg"}
                width={80}
                height={80}
                style={{ borderRadius: "4px" }}
                alt=""
              />
              {/* <Image
                src={instructor.avatar}
                alt={instructor.firstName}
                // borderRadius={"50%"}
                w={"100%"}
                h={"100%"}
                borderRadius={6}
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
              /> */}
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
              >
                {instructor._id === instructorId && (
                  <NextLink href={"/instructor-dashboard/profile"}>
                    <Button
                      as={"a"}
                      size={{ base: "xs", md: "sm" }}
                      colorScheme="teal"
                      fontSize={{ base: "xs", md: "sm" }}
                      borderRadius={4}
                    >
                      Profile
                    </Button>
                  </NextLink>
                )}
              </Box>
            </CardFooter>
          </Card>
        ))}
    </Box>
  );
};

export default React.memo(InstructorList);
