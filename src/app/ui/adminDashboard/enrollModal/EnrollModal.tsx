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
  ModalFooter,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { TCourse } from "../../../../../public/courses";
function EnrollModal({ courses }: { courses: TCourse[] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link
        onClick={onOpen}
        fontSize={{ base: "xs", md: "sm" }}
        color={"#1e88e5"}
      >
        courses
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", sm: "sm" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: "sm", xl: "md" }}>
            Enrolled Courses
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={"start"}>
              {courses.map((course, idx) => (
                <Text key={idx} fontSize={{ base: "xs" }}>
                  {`${idx + 1} : ${course.courseName}`}
                </Text>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              size={{ base: "xs" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default React.memo(EnrollModal);
