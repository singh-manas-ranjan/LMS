import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  CardHeader,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { TUser } from "../navbar/Navbar";

const textStyle = {
  fontSize: { base: "xs", md: "sm" },
};

const InstructorCard = ({ instructor }: { instructor: TUser }) => {
  const instructorId = btoa(instructor._id ?? "");
  return (
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
          <Text sx={textStyle}>{instructor.phone}</Text>
          <Text sx={textStyle} display={{ base: "none", sm: "initial" }}>
            {instructor.role}
          </Text>
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
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={"end"}
          paddingTop={5}
          pb={4}
          pr={{ md: 5 }}
        >
          <Box
            display={{ base: "none", md: "grid" }}
            rowGap={2}
            textAlign={"right"}
          >
            <Text sx={textStyle}>
              {`${instructor.firstName} ${instructor.lastName}`}
            </Text>
            <Text sx={textStyle}>{instructor.email}</Text>
            <Text sx={textStyle}>{instructor.phone}</Text>
          </Box>
          <NextLink href={`/admin-dashboard/instructors/${instructorId}`}>
            <Button
              colorScheme="teal"
              size={{ base: "xs", md: "sm" }}
              borderRadius={4}
            >
              Profile
            </Button>
          </NextLink>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default InstructorCard;
