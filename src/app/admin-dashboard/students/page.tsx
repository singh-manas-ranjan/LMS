import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import { fetchAllUsers } from "@/actions/users/action";
import EnrollModal from "@/app/ui/adminDashboard/enrollModal/EnrollModal";
import { TUser } from "@/app/ui/dashboard/navbar/Navbar";

const main = {
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  bg: "#ffffff",
  color: "#364A63",
};
const textStyle = {
  fontSize: { base: "sm", xl: "md" },
};
const AdminStudents = async () => {
  const allStudents: TUser[] = await fetchAllUsers("students");
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Flex justifyContent={"space-between"} p={".5rem"} alignItems={"center"}>
        <Heading size={{ base: "sm", sm: "md" }} pl={".5rem"}>
          Students
        </Heading>
        <Flex></Flex>
      </Flex>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
        <Box display={"grid"} rowGap={5} p={".5rem"}>
          {allStudents.map((student) => (
            <Card
              key={student._id}
              color="#364A63"
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              direction={"row"}
              h={"60px"}
            >
              <CardHeader p={2.5} display={{ base: "none", sm: "initial" }}>
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
                paddingRight={{ base: 0, sm: "initial" }}
              >
                <VStack
                  spacing={0}
                  flex={{ base: 3, xl: 2 }}
                  alignItems={{ base: "start", md: "center" }}
                  justifyContent={"center"}
                >
                  <Heading
                    sx={textStyle}
                  >{`${student.firstName} ${student.lastName}`}</Heading>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    display={{ md: "none" }}
                  >
                    {student.email}
                  </Text>
                </VStack>
                <VStack
                  flex={10}
                  flexDirection={{ ms: "row" }}
                  justifyContent={{ base: "center", md: "space-evenly" }}
                >
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    display={{ base: "none", md: "flex" }}
                  >
                    {student.email}
                  </Text>
                  <Text
                    fontSize={{ base: "xs", lg: "sm" }}
                    display={{ base: "none", md: "flex" }}
                  >
                    {student.phone}
                  </Text>
                  <EnrollModal studentId={student._id} />
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    display={{ base: "none", xl: "initial" }}
                  >
                    {student.address}
                  </Text>
                </VStack>
              </CardBody>
              <CardFooter
                flexDir={{ sm: "column" }}
                justifyContent={{ base: "space-between", sm: "center" }}
                rowGap={3}
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
      </Box>
    </Box>
  );
};

export default AdminStudents;
