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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  Text,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { MdLocalPhone } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaMapLocation } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { TStudentsInfo } from "../../../../../../public/studentInfo";

interface Props {
  studentPersonalInfo: TStudentsInfo;
}

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  qualification: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  country: string;
};

const errorText = {
  fontSize: "xs",
  color: "red.500",
};

const EditPersonalInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit = (e: TFormData) => {
    console.log(e);
  };

  const onReset = () => {
    reset();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        display={"grid"}
        placeItems={"center"}
        boxSize={10}
        borderRadius={"50%"}
        bg={"transparent"}
        transition={".3s ease-in-out"}
        _hover={{ bg: "#E2E8F0" }}
      >
        <BiSolidEdit style={{ borderRadius: "50%" }} color="#364A63" />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "lg", lg: "xl" }}
        closeOnEsc={true}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: "md", md: "lg" }}>
            Update Profile
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Personal</Tab>
                <Tab>Address</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <form>
                    <Box
                      display={"flex"}
                      flexDir={{ base: "column", md: "row" }}
                      columnGap={5}
                      rowGap={5}
                    >
                      <FormControl>
                        <FormLabel fontSize={"sm"}>First Name</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <MdDriveFileRenameOutline color="grey" />
                          </InputLeftElement>
                          <Input
                            {...register("firstName", {
                              required: {
                                value: true,
                                message: "First Name cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="First Name"
                          />
                        </InputGroup>
                        {errors.firstName && (
                          <Text sx={errorText}>
                            {errors.firstName?.message}
                          </Text>
                        )}
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Last Name</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <MdDriveFileRenameOutline color="grey" />
                          </InputLeftElement>
                          <Input
                            {...register("lastName", {
                              required: {
                                value: true,
                                message: "Last Name cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="last name"
                          />
                        </InputGroup>
                        {errors.lastName && (
                          <Text sx={errorText}>{errors.lastName?.message}</Text>
                        )}
                      </FormControl>
                    </Box>
                    <FormControl mt={5}>
                      <FormLabel fontSize={"sm"}>Email</FormLabel>
                      <InputGroup size={"sm"}>
                        <InputLeftElement>
                          <MdAttachEmail color="grey" />
                        </InputLeftElement>
                        <Input
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email cannot be empty",
                            },
                          })}
                          type="email"
                          size={"sm"}
                          placeholder="Email"
                        />
                      </InputGroup>
                      {errors.email ? (
                        <Text sx={errorText}>{errors.email?.message}</Text>
                      ) : (
                        <FormHelperText fontSize={"xs"}>
                          We&apos;ll never share your email.
                        </FormHelperText>
                      )}
                    </FormControl>
                    <Box
                      display={"flex"}
                      flexDir={{ base: "column", md: "row" }}
                      columnGap={5}
                      rowGap={5}
                      mt={5}
                    >
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Phone</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <MdLocalPhone color="grey" />
                          </InputLeftElement>
                          <Input
                            {...register("phone")}
                            type="tel"
                            placeholder="phone number"
                            size={"sm"}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Date of Birth</FormLabel>
                        <Input type="date" size={"sm"} cursor={"pointer"} />
                      </FormControl>
                    </Box>
                    <Box
                      mt={5}
                      display={"flex"}
                      flexDir={{ base: "column", md: "row" }}
                      columnGap={5}
                      rowGap={5}
                    >
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Gender</FormLabel>
                        <Select
                          {...register("gender")}
                          placeholder="Select Gender"
                          size={"sm"}
                          cursor={"pointer"}
                          variant={"filled"}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Qualification</FormLabel>
                        <Select
                          {...register("qualification")}
                          placeholder="Select Qualification"
                          size={"sm"}
                          variant={"filled"}
                          cursor={"pointer"}
                        >
                          <option value="ug">Under Graduate</option>
                          <option value="g">Graduate</option>
                          <option value="pg">Post Graduate</option>
                        </Select>
                      </FormControl>
                    </Box>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form>
                    <Box
                      display={"flex"}
                      flexDir={{ base: "column", md: "row" }}
                      columnGap={5}
                      rowGap={5}
                    >
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Address Line 1</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <GiPathDistance color="grey" />
                          </InputLeftElement>
                          <Input
                            {...register("addressLine1", {
                              required: {
                                value: true,
                                message: "Address Line 1 cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="2337 1st Main"
                          />
                        </InputGroup>
                        {errors.addressLine1 && (
                          <Text sx={errorText}>
                            {errors.addressLine1?.message}
                          </Text>
                        )}
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Address Line 2</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <FaStreetView color="grey" />
                          </InputLeftElement>
                          <Input
                            {...register("addressLine2", {
                              required: {
                                value: true,
                                message: "Address Line 2 cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="13th Lane"
                          />
                        </InputGroup>
                        {errors.addressLine2 && (
                          <Text sx={errorText}>
                            {errors.addressLine2?.message}
                          </Text>
                        )}
                      </FormControl>
                    </Box>

                    <Box
                      mt={5}
                      display={"flex"}
                      flexDir={{ base: "column", md: "row" }}
                      columnGap={5}
                      rowGap={5}
                    >
                      <FormControl>
                        <FormLabel fontSize={"sm"}>State</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <FaMapLocation color="grey" />
                          </InputLeftElement>
                          <Input
                            {...register("state", {
                              required: {
                                value: true,
                                message: "State cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="Bengaluru"
                          />
                        </InputGroup>
                        {errors.state && (
                          <Text sx={errorText}>{errors.state?.message}</Text>
                        )}
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Country</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <BsGlobeCentralSouthAsia color="grey" />
                          </InputLeftElement>
                          <Input
                            {...register("country", {
                              required: {
                                value: true,
                                message: "Country cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="INDIA"
                          />
                        </InputGroup>
                        {errors.country && (
                          <Text sx={errorText}>{errors.country?.message}</Text>
                        )}
                      </FormControl>
                    </Box>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              size={"sm"}
              width={"30%"}
              type="reset"
              mr={10}
              onClick={() => onReset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              size={"sm"}
              width={"30%"}
              onClick={onClose}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPersonalInfo;
