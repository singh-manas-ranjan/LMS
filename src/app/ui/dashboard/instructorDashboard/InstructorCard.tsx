import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  CardHeader,
  Badge,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { TUser } from "../../navbar/Navbar";

const textStyle = {
  fontSize: { base: "xs", md: "sm" },
};

const InstructorCard = ({ instructor }: { instructor: TUser }) => {
  return (
    <Card
      key={instructor._id}
      color="teal"
      boxShadow={
        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      }
      direction={"row"}
      h={{ base: "100px", md: "120px" }}
      w={"100%"}
      alignItems={"center"}
    >
      <CardHeader
        p={2}
        pl={{ base: 3, md: 4 }}
        h={{ base: "60%", md: "70%" }}
        flexShrink={"unset"}
      >
        <Image
          src={instructor.avatar}
          alt={instructor.firstName}
          borderRadius={"50%"}
          w={"100%"}
          h={"100%"}
          minW={"0px"}
        />
      </CardHeader>
      <CardBody p={1} pr={{ base: 3, md: 4 }} ml={{ md: 5 }}>
        <Box
          h={"100%"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
        >
          <Text sx={textStyle}>
            {`${instructor.firstName} ${instructor.lastName}`}
          </Text>
          <Text sx={textStyle}>{instructor.email}</Text>
          <Text sx={textStyle}>{instructor.phone}</Text>
        </Box>
      </CardBody>
      <CardFooter
        flexDir={{ sm: "column" }}
        justifyContent={{ base: "space-between", sm: "center" }}
        alignItems={"center"}
        p={0}
        paddingRight={{ base: 3, md: 4 }}
      >
        <Button
          colorScheme="teal"
          size={{ base: "xs", md: "sm" }}
          borderRadius={4}
        >
          Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InstructorCard;
