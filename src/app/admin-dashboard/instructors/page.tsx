import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import UsersList from "@/app/ui/adminDashboard/users/UsersList";

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

const AdminInstructor = async () => {
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Flex justifyContent={"space-between"} p={".5rem"} alignItems={"center"}>
        <Heading size={{ base: "sm", sm: "md" }}>Instructors</Heading>
        <Flex></Flex>
      </Flex>
      <Box
        w={"100%"}
        h={"100%"}
        columnGap={5}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          flex={{ base: 0.5, sm: 0.6, md: 1.5, lg: 1 }}
          p={{ base: 3, lg: 0 }}
          w={"100%"}
        >
          <Box width={{ base: "100%" }} paddingInline={{ md: 2 }}>
            <FormControl w={"100%"}>
              <FormLabel fontSize={"sm"}>Search Filter</FormLabel>
              <Input
                type="text"
                size={"sm"}
                placeholder="search"
                borderRadius={4}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel fontSize={"sm"}>Location</FormLabel>
              <Select size={"sm"} placeholder="Select location">
                <option>Bengaluru</option>
              </Select>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel fontSize={"sm"}>Courses</FormLabel>
              <Select size={"sm"} placeholder="Select course">
                <option>JavaScript</option>
              </Select>
            </FormControl>
            <FormControl mt={5} display={"grid"}>
              <Button colorScheme="teal" size={"sm"}>
                Search
              </Button>
            </FormControl>
          </Box>
        </Box>
        <Box
          flex={4}
          overflowY={"scroll"}
          w={"100%"}
          h={"100%"}
          sx={sxScrollbar}
        >
          <UsersList userRole="instructors" />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminInstructor;
