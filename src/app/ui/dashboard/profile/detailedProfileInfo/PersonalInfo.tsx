import { TUser } from "@/app/ui/navbar/Navbar";
import { Heading, Text, Box, Flex, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import { TUserInfo } from "./DetailedProfileInfo";

interface Props {
  userData: TUserInfo;
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
            fontSize={{ base: ".8rem", sm: "sm" }}
            width={{ base: "35%", lg: "20%" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={"#364A63"}
          >
            {`${entry[0]
              .charAt(0)
              .toUpperCase()
              .concat(entry[0].substring(1).toLocaleLowerCase())} `}{" "}
            <span>:</span>
          </Heading>
          <Text
            fontSize={{
              base: ".7rem",
              sm: ".8rem",
              lg: "sm",
            }}
            width={{ base: "60%", lg: "70%" }}
            display={"flex"}
            alignItems={"center"}
            color={"#364A63"}
          >
            {entry[1] === "" ? "-NA-" : entry[1]}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default PersonalInfo;
