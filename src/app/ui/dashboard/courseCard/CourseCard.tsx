import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import EnrollBtn from "./enrollBtn/EnrollBtn";
import { TCourse } from "../../../../../public/courses";

interface Props {
  course: TCourse;
}

const textStyle = {
  fontSize: { base: "sm" },
};

const CourseCard = ({ course }: Props) => {
  return (
    <Card
      // h={{ sm: "370px", md: "315px" }}
      boxShadow={
        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      }
    >
      <CardHeader>
        <Image
          src={course.courseImg}
          alt={course.courseName}
          borderRadius="lg"
          w={"100%"}
          h={"100%"}
        />
      </CardHeader>
      <CardBody
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        paddingBlock={0}
      >
        <Heading size={{ base: "xs" }}>{course.courseName}</Heading>
        <Grid>
          <Text sx={textStyle} color={"#3c7356"}>
            {course.author}
          </Text>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text sx={textStyle}>{course.courseRating}</Text>
            <Text color="blue.600" sx={textStyle}>
              {course.coursePrice === 0
                ? `Free`
                : `₹ ${course.coursePrice.toLocaleString()}`}
            </Text>
          </Box>
        </Grid>
      </CardBody>
      <CardFooter paddingTop={2} paddingBottom={5} display={"grid"}>
        <EnrollBtn course={course} />
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
