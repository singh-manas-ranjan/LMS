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
  useToast,
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
import {
  addUserInfoToLocalStorage,
  removeUserInfoFromLocalStorage,
  TAddress,
  TUser,
} from "@/app/ui/navbar/Navbar";
import axios from "axios";

const errorText = {
  fontSize: "xs",
  color: "red.500",
};

const EditPersonalInfo = ({
  userInfo,
  userId,
  handleUpdateUserInfo,
}: {
  userInfo: TUser;
  userId: string;
  handleUpdateUserInfo: (newUserData: TUser) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const displayToast = (
    title: string,
    status: "success" | "error" | "info",
    description: string
  ) => {
    toast({
      title,
      status,
      description,
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUser>({
    values: userInfo,
  });

  const {
    register: addressRegister,
    handleSubmit: addressHandleSubmit,
    formState: { errors: addressErrors },
  } = useForm<TAddress>({
    values: userInfo.address,
  });

  const onSubmit = async (e: TUser) => {
    onClose();
    const {
      _id,
      firstName,
      lastName,
      email,
      phone,
      qualification,
      gender,
      role,
      avatar,
      enrolledCourses,
      address,
    } = e;
    try {
      const response = await fetch(
        `https://learnopia-backend.vercel.app/api/v1/students/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            qualification,
            gender,
          }),
        }
      );
      if (response.ok) {
        displayToast(
          "Success",
          "success",
          "Student Information Updated Successfully"
        );
        removeUserInfoFromLocalStorage();
        addUserInfoToLocalStorage({
          _id,
          firstName,
          lastName,
          email,
          phone,
          gender,
          role,
          avatar,
          enrolledCourses,
          qualification,
          address,
        } as TUser);
        handleUpdateUserInfo({
          firstName,
          lastName,
          email,
          phone,
          gender,
          qualification,
          address,
        } as TUser);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onAddressSubmit = async (e: TAddress) => {
    const { firstName, lastName, email, phone, gender, qualification } =
      userInfo;
    try {
      const response = await axios.patch(
        `https://learnopia-backend.vercel.app/api/v1/students/${userId}`,
        { ...userInfo, address: e }
      );
      if (response.data.body) {
        displayToast(
          "Success",
          "success",
          "Student Information Updated Successfully"
        );
        removeUserInfoFromLocalStorage();
        handleUpdateUserInfo({
          firstName,
          lastName,
          email,
          phone,
          gender,
          qualification,
          address: { ...e },
        } as TUser);
        addUserInfoToLocalStorage({ ...userInfo, address: { ...e } });
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
      handleUpdateUserInfo(userInfo);
    }
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
                  <form onSubmit={handleSubmit(onSubmit)}>
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

                    <Box
                      display={"flex"}
                      flexDir={{ base: "column", md: "row" }}
                      columnGap={5}
                      rowGap={5}
                      mt={5}
                    >
                      <FormControl>
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
                          {...register("gender", {
                            required: {
                              value: true,
                              message: "Gender is required",
                            },
                          })}
                          placeholder="Select Gender"
                          size={"sm"}
                          cursor={"pointer"}
                          variant={"filled"}
                        >
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="O">Other</option>
                        </Select>
                        {errors.gender && (
                          <Text sx={errorText}>{errors.gender?.message}</Text>
                        )}
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Qualification</FormLabel>
                        <Select
                          {...register("qualification", {
                            required: {
                              value: true,
                              message: "Qualification is required",
                            },
                          })}
                          placeholder="Select Qualification"
                          size={"sm"}
                          variant={"filled"}
                          cursor={"pointer"}
                        >
                          <option value="X">Secondary</option>
                          <option value="XII">Senior Secondary</option>
                          <option value="UG">Under Graduate</option>
                          <option value="PG">Post Graduate</option>
                        </Select>
                        {errors.qualification && (
                          <Text sx={errorText}>
                            {errors.qualification?.message}
                          </Text>
                        )}
                      </FormControl>
                    </Box>
                    <ModalFooter pr={0} pb={2} pt={10}>
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
                        onSubmit={() => onSubmit}
                      >
                        Submit
                      </Button>
                    </ModalFooter>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form onSubmit={addressHandleSubmit(onAddressSubmit)}>
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
                            {...addressRegister("addressLine1", {
                              required: {
                                value: true,
                                message: "Address Line 1 cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="Address Line 1"
                          />
                        </InputGroup>
                        {addressErrors.addressLine1 && (
                          <Text sx={errorText}>
                            {addressErrors.addressLine1?.message}
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
                            {...addressRegister("addressLine2", {
                              required: {
                                value: true,
                                message: "Address Line 2 cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="Address Line 2"
                          />
                        </InputGroup>
                        {addressErrors.addressLine2 && (
                          <Text sx={errorText}>
                            {addressErrors.addressLine2?.message}
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
                            {...addressRegister("state", {
                              required: {
                                value: true,
                                message: "State cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="State"
                          />
                        </InputGroup>
                        {addressErrors.state && (
                          <Text sx={errorText}>
                            {addressErrors.state?.message}
                          </Text>
                        )}
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize={"sm"}>Country</FormLabel>
                        <InputGroup size={"sm"}>
                          <InputLeftElement>
                            <BsGlobeCentralSouthAsia color="grey" />
                          </InputLeftElement>
                          <Input
                            {...addressRegister("country", {
                              required: {
                                value: true,
                                message: "Country cannot be empty",
                              },
                            })}
                            type="text"
                            size={"sm"}
                            placeholder="Country"
                          />
                        </InputGroup>
                        {addressErrors.country && (
                          <Text sx={errorText}>
                            {addressErrors.country?.message}
                          </Text>
                        )}
                      </FormControl>
                    </Box>
                    <ModalFooter pr={0} pb={2} pt={10}>
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
                        onSubmit={() => onAddressSubmit}
                      >
                        Submit
                      </Button>
                    </ModalFooter>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPersonalInfo;
