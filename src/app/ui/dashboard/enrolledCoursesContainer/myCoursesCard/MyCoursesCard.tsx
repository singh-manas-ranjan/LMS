import {
  Box,
  Button,
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
import Link from "next/link";
import { TCourse } from "../../../../../../public/courses";

interface Props {
  course: TCourse;
}

const MyCoursesCard = ({ course }: Props) => {
  const textStyle = {
    fontSize: { base: "sm" },
  };
  return (
    <Card
      // h={{ base: "fit-content", sm: "370px", md: "315px" }}
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
        rowGap={3}
        paddingBlock={0}
      >
        <Heading size={{ base: "xs" }}>{course.courseName}</Heading>
        <Grid>
          <Text sx={textStyle} color={"#3c7356"}>
            {course.author}
          </Text>
          <Text sx={textStyle}>{course.courseRating}</Text>
        </Grid>
      </CardBody>
      <CardFooter paddingTop={2} paddingBottom={5} display={"grid"}>
        {/* <Link href={`/dashboard/my-courses/${btoa(course._id)}`}> */}
        <Link href={`/dashboard/my-courses/${course._id}`}>
          <Button
            fontSize={{ base: "sm", xl: "md" }}
            colorScheme="teal"
            size={{ base: "sm", xl: "md" }}
            width={"100%"}
          >
            Watch
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MyCoursesCard;
