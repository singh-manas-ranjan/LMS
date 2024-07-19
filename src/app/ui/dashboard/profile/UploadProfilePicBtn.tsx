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
} from "@chakra-ui/react";
import React from "react";
import { FaCameraRetro } from "react-icons/fa";

const UploadProfilePicBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   async function create(formData: FormData) {
  //     "use server";
  //     const file = formData.get("profilePic");
  //     console.log(file);
  //   }
  return (
    <>
      {/* <form action={create}>
        <Input type="file" id="profilePic" name="profilePic" />
        <Button
          type="submit"
          colorScheme="blue"
          size="sm"
          leftIcon={<FaCameraRetro />}
        />
      </form> */}
      <Button
        onClick={onOpen}
        position={"absolute"}
        bottom={-1}
        right={-1}
        display={"grid"}
        placeItems={"center"}
        boxSize={10}
        borderRadius={"50%"}
        bg={"#E5E9F2"}
        _hover={{ bg: "#97CAF0" }}
      >
        <FaCameraRetro />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInTop"
        size={{ base: "xs", sm: "sm" }}
        closeOnEsc={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              style={{
                display: "grid",
                justifyContent: "center",
                padding: ".5rem",
              }}
            >
              <input type="file" name="profilePic" style={{ width: "100%" }} />
              <Button type="submit" mt={3} size={"sm"} colorScheme="teal">
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadProfilePicBtn;
