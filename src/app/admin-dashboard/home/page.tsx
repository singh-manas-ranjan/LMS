import {
  Card,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  Grid,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const btnStyle = {
  width: "100%",
};
const main = {
  width: "100%",
  height: "100%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  overflow: "hidden",
};

const Home = () => {
  return (
    <Box as="main" sx={main}>
      <Grid placeItems={"center"} h={"80vh"} width={"100%"}>
        <Box
          display={{ base: "grid", md: "flex" }}
          rowGap={10}
          columnGap={10}
          width={{ base: "70%", sm: "50%", md: "80%", lg: "70%" }}
          textAlign={"center"}
        >
          <Card variant="filled" flex={1}>
            <CardHeader>
              <Heading size="md">Dashboard</Heading>
            </CardHeader>
            <CardFooter display={"grid"} alignItems={"center"}>
              <Link href={"/admin-dashboard"}>
                <Button sx={btnStyle} colorScheme="teal">
                  Visit
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card variant="filled" flex={1}>
            <CardHeader>
              <Heading size="md">Instructor</Heading>
            </CardHeader>
            <CardFooter display={"grid"} alignItems={"center"}>
              <Link href={"/admin-dashboard/accounts/instructors"}>
                <Button sx={btnStyle} colorScheme="teal">
                  Visit
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card variant="filled" flex={1}>
            <CardHeader>
              <Heading size="md">Student</Heading>
            </CardHeader>
            <CardFooter display={"grid"} alignItems={"center"}>
              <Link href={"/admin-dashboard/accounts/students"}>
                <Button sx={btnStyle} colorScheme="teal">
                  Visit
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
