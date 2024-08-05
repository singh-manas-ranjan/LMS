"use client";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdStart } from "react-icons/md";
import SignUpForm from "../signUp/SignUpForm";

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

const SignUpModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} sx={btnStyle} size={{ base: "sm", md: "md" }}>
        Sign Up <MdStart size={20} />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "lg" }}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: "md", md: "lg" }}>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="enclosed" size={{ base: "sm", lg: "md" }}>
              <TabList mb="1em">
                <Tab fontSize={{ base: "sm", lg: "md" }}>Student</Tab>
                <Tab fontSize={{ base: "sm", lg: "md" }}>Instructor</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SignUpForm role="students" onClose={onClose} />
                </TabPanel>
                <TabPanel>
                  <SignUpForm role="instructors" onClose={onClose} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUpModal;
