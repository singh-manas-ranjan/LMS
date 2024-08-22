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
import React, { useEffect, useReducer, useState } from "react";
import EnrollModal from "../enrollModal/EnrollModal";
import { TUser } from "../../navbar/Navbar";
import InstructorCard from "../../instructorDashboard/InstructorCard";
import { useSearchParams } from "next/navigation";
import { fetchAllUsers } from "@/actions/users/action";

const textStyle = {
  fontSize: { base: "xs", xl: "sm" },
};

interface Props {
  userRole: "students" | "instructors";
}

const UsersList = ({ userRole }: Props) => {
  const searchParams = useSearchParams();
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetchAllUsers(userRole);
      setUsers(response);
    };

    fetchUserData();
  }, [userRole]);

  const name = searchParams.get("name")?.toLowerCase() || "";
  const location = searchParams.get("location")?.toLowerCase() || "";
  const course = searchParams.get("course")?.toLowerCase() || "";

  const filteredUsers = users.filter((user) => {
    const userFullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const userLocation = user.address?.city?.toLowerCase() || "";
    const userCourse = user.domain?.toLowerCase() || "";
    const userServices =
      user.services?.map((service) => service.toLowerCase()) || [];

    return (
      (!name || userFullName.includes(name)) &&
      (!location || userLocation.includes(location)) &&
      (!course ||
        userCourse.includes(course) ||
        userServices.some((service) => service.includes(course)))
    );
  });

  if (users.length === 0) {
    return (
      <Box w={"100%"} display={"grid"} placeItems={"center"}>
        <Spinner
          thickness="4px"
          speed="0.85s"
          color="blue.500"
          emptyColor="gray.200"
          size="xl"
          mt={20}
        />
      </Box>
    );
  }

  if (filteredUsers.length === 0) {
    return (
      <Box w={"100%"} display={"grid"} placeItems={"center"} paddingBlock={10}>
        <Text
          fontSize={{ base: "sm", ld: "md" }}
        >{`No ${userRole} found`}</Text>
      </Box>
    );
  }

  if (userRole === "instructors") {
    return (
      <Box display={"grid"} rowGap={5} p={".5rem"}>
        {filteredUsers.map((user, idx) => (
          <InstructorCard key={idx} instructor={user} />
        ))}
      </Box>
    );
  }

  return (
    <Box display={"grid"} rowGap={5} p={".5rem"}>
      {filteredUsers.map((student) => (
        <Card
          key={student._id}
          color="teal"
          boxShadow={
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
          }
          direction={"row"}
          h={"60px"}
          w={"100%"}
        >
          <CardHeader p={2.5} pl={4} display={{ base: "none", sm: "initial" }}>
            <Image
              src={student.avatar ?? "/avatar.svg"}
              alt={"profilePic"}
              h={"100%"}
              w={"100%"}
            />
          </CardHeader>
          <CardBody
            display={"flex"}
            alignItems={"center"}
            paddingInline={{ sm: "0", md: "initial" }}
            justifyContent={"center"}
          >
            <VStack
              spacing={1.5}
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
                  courses={student.enrolledCourses ?? []}
                  studentId={student._id ?? ""}
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
                {student.address?.addressLine1
                  ? `${student.address?.state}, ${student.address?.country}`
                  : "-NA-"}
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

export default React.memo(UsersList);
