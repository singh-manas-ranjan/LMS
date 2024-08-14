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
import axios from "axios";
import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import {
  getUserInfoFromLocalStorage,
  removeUserInfoFromLocalStorage,
  TUser,
} from "../../navbar/Navbar";

const UploadProfilePicBtn = ({
  user,
}: {
  user: "STUDENTS" | "INSTRUCTORS";
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { _id } = getUserInfoFromLocalStorage();
    const formData = new FormData(e.currentTarget);
    try {
      const response: TUser = await axios
        .patch(
          // `https://learnopia-backend.vercel.app/api/v1/${user.toLowerCase()}/avatar/${_id}`,
          `http://localhost:3131/api/v1/${user.toLowerCase()}/avatar/${_id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => res.data.body)
        .catch((err) => console.log(err));
      removeUserInfoFromLocalStorage();
      localStorage.setItem("userInfo", JSON.stringify(response));
      onClose();
      window?.location.reload();
    } catch (error) {
      console.error("Failed to upload profile picture:", error);
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        position={"absolute"}
        bottom={-1}
        right={-1}
        display={"grid"}
        placeItems={"center"}
        boxSize={10}
        borderRadius={"50%"}
        bg={"#E5E9F28C"}
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
              onSubmit={handleSubmit}
            >
              <input
                type="file"
                name="avatar"
                style={{ width: "100%" }}
                accept="image/jpeg, image/png , image/jpg"
              />
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

export default React.memo(UploadProfilePicBtn);
