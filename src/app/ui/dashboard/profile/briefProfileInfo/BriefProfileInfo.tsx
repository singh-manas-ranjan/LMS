"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import UploadProfilePicBtn from "../UploadProfilePicBtn";
import { getUserInfoFromLocalStorage, TUser } from "../../navbar/Navbar";

const BriefProfileInfo = () => {
  const [userInfo, setUserInfo] = useState<TUser>({} as TUser);
  const [userAvatar, setUserAvatar] = useState("/avatar.png");

  const handleAvatarUpdate = (avatarUrl: string) => {
    setUserAvatar(avatarUrl);
  };

  useEffect(() => {
    setUserInfo((prev) => (prev = getUserInfoFromLocalStorage()));
    setUserAvatar((prev) => userInfo.avatar);
  }, [userInfo.avatar]);

  return (
    <Box
      p={".3rem"}
      width={"100%"}
      h={"100%"}
      display={"flex"}
      flexDir={{ base: "column", md: "column" }}
      borderRadius={6}
    >
      <Box
        flex={{ base: 1 }}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        rowGap={3}
        borderRadius={6}
        p={".9rem"}
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <Box
          borderRadius={"50%"}
          w={"100px"}
          h={"100px"}
          display={"grid"}
          placeItems={"center"}
          position={"relative"}
        >
          <Image
            loading="lazy"
            alt="profile-pic"
            src={userAvatar}
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              boxShadow:
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
            }}
          />
          <UploadProfilePicBtn
            user="STUDENTS"
            updateAvatar={handleAvatarUpdate}
          />
        </Box>
        <Grid textAlign={"center"} rowGap={2} color={"#364A63"}>
          <Heading fontSize={{ base: "sm", lg: "md" }}>
            Manas Ranjan Singh
          </Heading>
          <Heading fontSize={{ base: ".8rem", lg: "sm" }}>
            {" "}
            Std.ID: <span>3636</span>{" "}
          </Heading>
          <Heading fontSize={{ base: ".8rem", lg: "sm" }}>
            Post Graduate
          </Heading>
        </Grid>
      </Box>
    </Box>
  );
};

export default BriefProfileInfo;
