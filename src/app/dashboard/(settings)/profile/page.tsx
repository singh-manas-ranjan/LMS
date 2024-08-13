import { Box } from "@chakra-ui/react";
import React from "react";
import BriefProfileInfo from "@/app/ui/dashboard/profile/briefProfileInfo/BriefProfileInfo";
import DetailedProfileInfo from "@/app/ui/dashboard/profile/detailedProfileInfo/DetailedProfileInfo";
import { sxScrollbar } from "../../../../../public/scrollbarStyle";
import UploadProfilePicBtn from "@/app/ui/dashboard/profile/UploadProfilePicBtn";

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
const Profile = () => {
  return (
    <Box as="main" sx={main}>
      <Box
        width={"100%"}
        h={"100%"}
        borderRadius={"6px"}
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        columnGap={{ md: 4 }}
      >
        <Box flex={2} borderRadius={6} w={"100%"} h={"100%"}>
          <BriefProfileInfo>
            <UploadProfilePicBtn user="STUDENTS" />
          </BriefProfileInfo>
        </Box>
        <Box
          flex={{ base: 6, md: 4, lg: 6, xl: 8 }}
          p={".3rem"}
          width={"100%"}
          h={"100%"}
          overflow={"hidden"}
        >
          <Box
            borderRadius={6}
            boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            padding={".5rem .8rem"}
            h={"100%"}
            w={"100%"}
            overflowY={"scroll"}
            sx={sxScrollbar}
          >
            <DetailedProfileInfo />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
