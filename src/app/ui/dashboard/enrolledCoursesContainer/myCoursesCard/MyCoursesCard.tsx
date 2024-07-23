import {
  Card,
  CardBody,
  CardHeader,
  Flex,
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
  return (
    <Link href={`/dashboard/my-courses/${btoa(course._id)}`}>
      <Card
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <CardHeader h={"60%"}>
          <Image
            src={`/${course.courseImg}`}
            alt={course.courseName}
            borderRadius="lg"
            w={"100%"}
          />
        </CardHeader>
        <CardBody display={"flex"} flexDir={"column"} rowGap={3} pt={0}>
          <Heading size={{ sm: "sm" }} h={"75px"}>
            {course.courseName}
          </Heading>
          <Flex justifyContent={"space-between"}>
            <Text color="#718096">{course.author}</Text>
            <Text>{course.courseRating}</Text>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MyCoursesCard;
