import { Heading, Text, Box, Flex, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import { TUserInfo } from "./DetailedProfileInfo";

interface Props {
  userData: TUserInfo | undefined;
}

const PersonalInfo = ({ userData }: Props) => {
  if (!userData) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
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
      {Object.entries(userData).map(([key, value], idx) => (
        <Box
          key={idx}
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading
            fontSize={{ base: ".8rem", sm: "sm" }}
            width={{ base: "45%", lg: "20%" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={"#364A63"}
          >
            {`${key
              .charAt(0)
              .toUpperCase()
              .concat(key.substring(1).toLocaleLowerCase())} `}{" "}
            <span>:</span>
          </Heading>
          <Text
            fontSize={{
              base: ".7rem",
              sm: ".8rem",
              lg: "sm",
            }}
            width={{ base: "50%", lg: "70%" }}
            display={"flex"}
            alignItems={"center"}
            color={"#364A63"}
          >
            {typeof value === "object" && value !== null
              ? `${value.addressLine1}, ${value.addressLine2}, ${value.state}, ${value.country}`
              : value}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default PersonalInfo;
