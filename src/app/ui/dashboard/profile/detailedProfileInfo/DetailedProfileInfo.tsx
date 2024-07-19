"use client";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import socialLinksData from "../../../../../../public/socialLinksData";
import EditPersonalInfo from "../editPersonalInfo/EditPersonalInfo";
import ResetPassword from "../resetPassword/ResetPassword";
import SocialLinks from "../socialLinks/SocialLinks";
import TextEditor from "../textEditor/TextEditor";
import { sxScrollbar } from "../../../../../../public/scrollbarStyle";
import PersonalInfo from "./PersonalInfo";
import { getUserInfoFromLocalStorage } from "../../navbar/Navbar";

const DetailedProfileInfo = () => {
  const [userInfo, setUserInfo] = useState<{ [key: string]: string } | null>(
    null
  );
  useEffect(() => {
    const info = getUserInfoFromLocalStorage();
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
    ];
    const filteredInfo = Object.entries(info).filter((entry) =>
      requiredFields.includes(entry[0])
    );
    setUserInfo(Object.fromEntries(filteredInfo));
  }, []);
  return (
    <Tabs w={"100%"} h={"100%"}>
      <TabList color={"#364A63"}>
        <Tab p={3} fontSize={{ base: "sm", lg: "1rem" }}>
          Profile
        </Tab>
        <Tab p={3} fontSize={{ base: "sm", lg: "1rem" }}>
          Password
        </Tab>
        <Tab p={3} fontSize={{ base: "sm", lg: "1rem" }}>
          Social Links
        </Tab>
      </TabList>
      <TabPanels
        h={{ base: "100%" }}
        overflowY={{ base: "scroll" }}
        paddingBlock={".1rem"}
        sx={sxScrollbar}
      >
        <TabPanel
          p={0}
          paddingBlock={1}
          mt={5}
          overflowY={"scroll"}
          sx={sxScrollbar}
        >
          <Box
            borderRadius={6}
            display={"flex"}
            flexDir={"column"}
            rowGap={3}
            w={"100%"}
            h={"100%"}
            paddingInline={".1rem"}
          >
            <Box
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              borderRadius={6}
              width={"100%"}
            >
              <Flex
                flexDir={"column"}
                width={"100%"}
                height={"100%"}
                p={{ base: ".9rem" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                  h={"fit-content"}
                >
                  <Heading
                    fontSize={{ base: "md", lg: "lg" }}
                    color={"#364A63"}
                  >
                    Personal Information
                  </Heading>
                  <EditPersonalInfo />
                </Box>
                <Divider marginBlock={2} orientation="horizontal" />
                <PersonalInfo userData={userInfo} />
              </Flex>
            </Box>
            <Box
              borderRadius={6}
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              p={"1rem"}
              display={"flex"}
              flexDir={"column"}
              width={"100%"}
              h={"100%"}
            >
              <TextEditor label={"Bio"} />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel>
          <ResetPassword />
        </TabPanel>
        <TabPanel>
          <Box h={"100%"}>
            <SocialLinks socialLinks={socialLinksData} />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DetailedProfileInfo;
