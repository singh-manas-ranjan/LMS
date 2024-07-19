"use client";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

import { LiaSignInAltSolid } from "react-icons/lia";
import LoginForm from "../signIn/SignInForm";

const SignInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnStyle = {
    bgColor: "#044F63",
    color: "#fff",
    _hover: { bg: "#55c2da" },
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 2,
  };

  return (
    <>
      <Button onClick={onOpen} sx={btnStyle} size={{ base: "sm", md: "md" }}>
        Sign In <LiaSignInAltSolid size={20} />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "md", lg: "lg" }}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: "md", md: "lg" }}>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="enclosed" size={{ base: "sm", lg: "md" }}>
              <TabList mb="1em">
                <Tab fontSize={{ base: "sm", lg: "md" }}>Student</Tab>
                <Tab fontSize={{ base: "sm", lg: "md" }}>Instructor</Tab>
                <Tab fontSize={{ base: "sm", lg: "md" }}>Admin</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <LoginForm
                    access={{ role: "STUDENTS", successPath: "/dashboard" }}
                    onClose={onClose}
                  />
                </TabPanel>
                <TabPanel>
                  <LoginForm
                    access={{
                      role: "INSTRUCTOR",
                      successPath: "/instructor-dashboard",
                    }}
                    onClose={onClose}
                  />
                </TabPanel>
                <TabPanel>
                  <LoginForm
                    access={{ role: "ADMIN", successPath: "/home" }}
                    onClose={onClose}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
