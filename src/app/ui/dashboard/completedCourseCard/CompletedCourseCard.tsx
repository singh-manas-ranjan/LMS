import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  CardHeader,
  Grid,
  Badge,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import React from "react";
import { Course } from "../../../../../public/courses";

const textStyle = {
  fontSize: { base: "sm", lg: "lg" },
};

const CompletedCourseCard = ({ course }: { course: Course }) => {
  return (
    <Card
      boxShadow={
        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      }
      direction={{ base: "column", sm: "row" }}
      h={{ sm: "90px", md: "100px", lg: "160px" }}
    >
      <CardHeader flex={1}>
        <Image
          src={course.courseImg}
          alt={course.courseName}
          borderRadius="lg"
          w={"100%"}
          h={"100%"}
        />
      </CardHeader>
      <CardBody
        flex={{ base: 4, xl: 5 }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={{ base: "space-between", sm: "space-evenly" }}
        padding={{ base: "0 1.5rem", sm: "0" }}
        rowGap={{ base: 2, md: 0 }}
      >
        <Heading sx={textStyle}>{course.courseName}</Heading>
        <Grid>
          <Text
            fontSize={{ base: ".7rem", md: "xs", lg: "sm" }}
            color={"#3c7356"}
          >
            {course.author}
          </Text>
        </Grid>
      </CardBody>
      <CardFooter
        flexDir={{ sm: "column" }}
        justifyContent={{ base: "space-between", sm: "center" }}
        rowGap={3}
        alignItems={"center"}
        p={{ base: ".3rem 1.5rem 1rem", sm: "1.5rem" }}
      >
        <Badge
          colorScheme="green"
          h={"fit-content"}
          variant={"outline"}
          fontSize={{ base: "xs", sm: ".5rem", md: "xs" }}
        >
          COMPLETED
        </Badge>
        <CircularProgress value={100} color="green.400" size={"30px"}>
          <CircularProgressLabel fontSize={".4rem"}>100%</CircularProgressLabel>
        </CircularProgress>
      </CardFooter>
    </Card>
  );
};

export default CompletedCourseCard;
