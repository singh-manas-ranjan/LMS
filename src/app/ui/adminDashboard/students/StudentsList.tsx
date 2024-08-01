"use client";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  VStack,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EnrollModal from "../enrollModal/EnrollModal";
import { TStudent } from "../../../../../public/studentInfo";
import { fetchAllUsers } from "@/actions/users/action";

const textStyle = {
  fontSize: { base: "sm", xl: "md" },
};
const StudentsList = () => {
  const [students, setStudents] = useState<TStudent[]>([]);

  useEffect(() => {
    async function fetchAllStudents() {
      const studentsResponse = await fetchAllUsers("students");
      setStudents(studentsResponse);
    }
    fetchAllStudents();
  }, []);

  if (students.length === 0) {
    return (
      <Box
        width={"100%"}
        display={"grid"}
        height={"100%"}
        placeItems={"center"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          color="blue.500"
          emptyColor="gray.200"
          size="xl"
        />
      </Box>
    );
  }

  return (
    <Box display={"grid"} rowGap={5} p={".5rem"}>
      {students.map((student) => (
        <Card
          key={student._id}
          color="teal"
          boxShadow={
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
          }
          direction={"row"}
          h={"60px"}
        >
          <CardHeader p={2.5} pl={4} display={{ base: "none", sm: "initial" }}>
            <Image
              src={student.avatar ?? "/avatar.svg"}
              alt={"profilePic"}
              h={"100%"}
              w={"100%"}
              borderRadius={"50%"}
            />
          </CardHeader>
          <CardBody
            display={"flex"}
            alignItems={"center"}
            paddingInline={{ sm: "0", md: "initial" }}
            justifyContent={"center"}
          >
            <VStack
              spacing={0}
              flex={{ base: "100px", sm: "120px", lg: 2, xl: 2 }}
              alignItems={{ base: "start", md: "center" }}
              justifyContent={"center"}
            >
              <Text
                sx={textStyle}
                flex={1}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "flex" }}
              >{`${student.firstName} ${student.lastName}`}</Text>
              <Text
                width={"120px"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={{ base: "xs", md: "sm" }}
                display={{ md: "none" }}
                overflow={"scroll"}
              >
                {student.email}
              </Text>
            </VStack>
            <Box flex={10} display={"flex"} flexDirection={{ ms: "row" }}>
              <Text
                flex={1}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={{ base: "xs", lg: "sm" }}
                display={{ base: "none", md: "flex" }}
              >
                {student.email}
              </Text>
              <Text
                flex={1}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={{ base: "xs", lg: "sm" }}
                display={{ base: "none", md: "flex" }}
              >
                {student.phone}
              </Text>
              <Box flex={1} display={"flex"} justifyContent={"center"}>
                <EnrollModal
                  courses={student.enrolledCourses}
                  studentId={student._id}
                  studentFirstName={student.firstName}
                />
              </Box>
              <Text
                flex={1}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", xl: "flex" }}
              >
                {student.address}
              </Text>
            </Box>
          </CardBody>
          <CardFooter
            flexDir={{ sm: "column" }}
            justifyContent={{ base: "space-between", sm: "center" }}
            alignItems={"center"}
            p={0}
            pr={5}
          >
            <Badge
              colorScheme="green"
              variant={"outline"}
              fontSize={{ base: ".5rem", md: "xs" }}
            >
              Active
            </Badge>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};

export default React.memo(StudentsList);
