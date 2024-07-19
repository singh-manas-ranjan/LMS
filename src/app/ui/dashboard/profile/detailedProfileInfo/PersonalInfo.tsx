import { Heading, Text, Box, Flex, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

interface Props {
  userData: { [key: string]: string } | null;
}

const PersonalInfo = ({ userData }: Props) => {
  const keys = ["First Name", "Last Name", "Email", "Phone", "Address"];

  if (!userData) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  return (
    <Flex
      flexDir={"column"}
      width={{ base: "100%" }}
      h={"100%"}
      justifyContent={"space-between"}
      rowGap={2}
      ml={{ md: ".8rem" }}
    >
      {Object.entries(userData).map((entry, idx) => (
        <Box
          key={idx}
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading
            fontSize={{ base: ".8rem", sm: "sm", lg: "md" }}
            width={{ base: "30%", lg: "20%" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={"#364A63"}
          >
            {`${keys[idx]} `} <span>:</span>
          </Heading>
          <Text
            fontSize={{
              base: ".7rem",
              sm: ".8rem",
              lg: "md",
            }}
            width={{ base: "65%", lg: "70%" }}
            display={"flex"}
            alignItems={"center"}
            color={"#364A63"}
          >
            {entry[1]}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default PersonalInfo;
