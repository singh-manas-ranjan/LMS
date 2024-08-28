import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import UsersList from "@/app/ui/adminDashboard/users/UsersList";
import StudentFilterForm from "@/app/ui/adminDashboard/students/StudentFilterForm";

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

const AdminStudents = async () => {
  return (
    <Box as="main" sx={main} overflow={"hidden"}>
      <Flex p={".5rem"} justifyContent={"space-between"}>
        <Heading size={{ base: "sm", sm: "md" }} pl={".5rem"}>
          Students
        </Heading>
        <Box>
          <Suspense>
            <StudentFilterForm />
          </Suspense>
        </Box>
      </Flex>

      <Box w={"100%"} h={"100%"}>
        <Box display={"grid"} rowGap={5} p={".5rem"}>
          <Card color="#364A63" boxShadow={"none"} direction={"row"} h={"60px"}>
            <CardHeader
              p={2.5}
              pl={4}
              display={{ base: "none", sm: "flex" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontSize={{ base: "xs", md: "sm" }}>Avatar</Text>
            </CardHeader>
            <CardBody
              display={"flex"}
              alignItems={"center"}
              paddingInline={{ sm: "0", md: "initial" }}
            >
              <VStack
                spacing={0}
                flex={{ base: "100px", sm: "120px", lg: 2, xl: 2 }}
                alignItems={{ base: "start", md: "center" }}
                justifyContent={"center"}
              >
                <Text
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={{ base: "xs", md: "sm" }}
                  display={{ base: "none", md: "initial" }}
                >
                  Name
                </Text>
                <Text
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={{ base: "xs", md: "sm" }}
                  display={{ md: "none" }}
                >
                  Name & Email
                </Text>
              </VStack>
              <Box flex={10} display={"flex"} flexDirection={{ ms: "row" }}>
                <Text
                  flex={1}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={{ base: "xs", md: "sm" }}
                  display={{ base: "none", md: "flex" }}
                >
                  Email
                </Text>
                <Text
                  flex={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={{ base: "xs", lg: "sm" }}
                  display={{ base: "none", md: "flex" }}
                >
                  Phone
                </Text>
                <Text
                  flex={1}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={{ base: "xs", lg: "sm" }}
                >
                  Enrolled
                </Text>
                <Text
                  flex={1}
                  justifyContent={"center"}
                  fontSize={{ base: "xs", md: "sm" }}
                  display={{ base: "none", xl: "flex" }}
                  alignItems={"center"}
                >
                  Address
                </Text>
              </Box>
            </CardBody>
            <CardFooter flexDir={{ sm: "column" }} p={0} pr={5}>
              <Text
                flex={1}
                fontSize={{ base: "xs", md: "sm" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                paddingInline={1}
              >
                Status
              </Text>
            </CardFooter>
          </Card>
        </Box>
        <Box overflowY={"scroll"} w={"100%"} h={"100%"} sx={sxScrollbar}>
          <Suspense>
            <UsersList userRole="students" />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminStudents;
