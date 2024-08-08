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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
import { ChevronDownIcon } from "lucide-react";
import { sxScrollbar } from "../../../../public/scrollbarStyle";
import {
  Select as ChakraSelect,
  MultiValue,
  PropsValue,
} from "chakra-react-select";
import makeAnimated from "react-select/animated";

const errorText = {
  fontSize: "xs",
  color: "red.500",
};

const InstructorProfileEditForm = ({
  userInfo,
  userId,
  handleUpdateInstructor,
}: {
  userInfo: TUser;
  userId: string;
  handleUpdateInstructor: (newInstructor: TUser) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [formStep, setFormStep] = useState(0);

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
    control,
  } = useForm<TUser>({
    values: userInfo,
  });

  const {
    register: addressRegister,
    handleSubmit: addressHandleSubmit,
    formState: { errors: addressErrors },
  } = useForm<TAddress>({});

  const domainOptions = [
    { value: "Front End", label: "Front End" },
    { value: "Back End", label: "Back End" },
    { value: "Software Testing", label: "Software Testing" },
    { value: "DevOps", label: "DevOps" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "ReactJs", label: "ReactJs" },
    { value: "ASP.Net", label: "ASP.Net" },
  ];

  type TLanguage = {
    value: string;
    label: string;
  };

  //   const languageOptions = [
  //     "English",
  //     "Hindi",
  //     "Telugu",
  //     "Konkani",
  //     "Gujarati",
  //     "Kannada",
  //     "Malayalam",
  //     "Odia",
  //     "Tamil",
  //     "Telugu",
  //     "Bengali",
  //     "Marathi",
  //     "Punjabi",
  //   ];
  const languageOptions: TLanguage[] = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Telugu", label: "Telugu" },
    { value: "Konkani", label: "Konkani" },
    { value: "Gujarati", label: "Gujarati" },
    { value: "Kannada", label: "Kannada" },
    { value: "Malayalam", label: "Malayalam" },
    { value: "Odia", label: "Odia" },
    { value: "Tamil", label: "Tamil" },
    { value: "Telugu", label: "Telugu" },
    { value: "Bengali", label: "Bengali" },
    { value: "Marathi", label: "Marathi" },
    { value: "Punjabi", label: "Punjabi" },
  ];

  const onSubmit = async (e: TUser) => {
    onClose();
    console.log(e);

    // handleUpdateInstructor(e);
    // try {
    //   const response = await axios.patch(
    //     `https://learnopia-backend.vercel.app/api/v1/instructors/${userId}`,
    //     // `http://localhost:3131/api/v1/students/${userId}`,
    //     e
    //   );
    //   if (response.data.body) {
    //     displayToast("Success", "success", "Updated Successfully");
    //     removeUserInfoFromLocalStorage();
    //     addUserInfoToLocalStorage(e);
    //   } else {
    //     throw new Error(response.statusText);
    //   }
    // } catch (error) {
    //   handleUpdateInstructor(userInfo);
    //   console.error(error);
    // }
  };

  const onAddressSubmit = (e: TAddress) => {
    console.log(e);
  };

  const onReset = () => {
    reset();
  };
  const animatedComponents = makeAnimated();

  return (
    <>
      <Button
        onClick={onOpen}
        display={"grid"}
        placeItems={"center"}
        boxSize={10}
        borderRadius={"50%"}
        bgColor={"#F4F3F3"}
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
        // scrollBehavior="inside"
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
                    {formStep === 0 && (
                      <Box w={"100%"} h={"100%"}>
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
                              <Text sx={errorText}>
                                {errors.lastName?.message}
                              </Text>
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
                            {errors.email && (
                              <Text sx={errorText}>
                                {errors.email?.message}
                              </Text>
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
                              <Text sx={errorText}>
                                {errors.gender?.message}
                              </Text>
                            )}
                          </FormControl>
                          <FormControl>
                            <FormLabel fontSize={"sm"}>Domain</FormLabel>
                            <Controller
                              name="domain"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Menu size={"sm"}>
                                  <MenuButton
                                    as={Button}
                                    rightIcon={<ChevronDownIcon />}
                                    size={"sm"}
                                    borderRadius={4}
                                    width={"100%"}
                                    textAlign={"left"}
                                  >
                                    {field.value || "Select Domain"}
                                  </MenuButton>
                                  <MenuList
                                    maxHeight="120px"
                                    overflowY="scroll"
                                    sx={sxScrollbar}
                                  >
                                    {domainOptions.map((option) => (
                                      <MenuItem
                                        bgSize={"sm"}
                                        key={option.value}
                                        onClick={() =>
                                          field.onChange(option.value)
                                        }
                                        fontSize={{ base: "xs", md: "sm" }}
                                      >
                                        {option.label}
                                      </MenuItem>
                                    ))}
                                  </MenuList>
                                </Menu>
                              )}
                            />
                            {errors.qualification && (
                              <Text sx={errorText}>
                                {errors.qualification?.message}
                              </Text>
                            )}
                          </FormControl>
                        </Box>
                      </Box>
                    )}
                    {formStep === 1 && (
                      <Box w={"100%"} h={"100%"}>
                        <FormControl>
                          <FormLabel fontSize={"sm"}>About Me</FormLabel>
                          <Textarea {...register("aboutMe")} size="sm" />
                        </FormControl>
                        <FormControl mt={5}>
                          <FormLabel fontSize={"sm"}>Languages</FormLabel>
                          <Controller
                            name="languages"
                            control={control}
                            render={({ field }) => (
                              <ChakraSelect
                                {...field}
                                isMulti
                                onChange={(selected: MultiValue<TLanguage>) =>
                                  field.onChange(selected)
                                }
                                value={
                                  field.value as
                                    | PropsValue<TLanguage>
                                    | undefined
                                }
                                options={languageOptions}
                                size={"sm"}
                              />
                            )}
                          />
                        </FormControl>
                      </Box>
                    )}
                    <ModalFooter pr={0} pb={2} pt={{ base: 5, md: 10 }}>
                      {formStep === 0 && (
                        <Box
                          width={"100%"}
                          h={"100%"}
                          display={"flex"}
                          justifyContent={"right"}
                        >
                          <Button
                            key={"B1"}
                            colorScheme="teal"
                            size={"sm"}
                            width={"30%"}
                            type="reset"
                            mr={10}
                            onClick={() => setFormStep((prev) => prev - 1)}
                          >
                            Back
                          </Button>
                          <Button
                            key={"S1"}
                            colorScheme="blue"
                            size={"sm"}
                            width={"30%"}
                            onClick={() => setFormStep((prev) => prev + 1)}
                          >
                            Next
                          </Button>
                        </Box>
                      )}
                      {formStep === 1 && (
                        <Box
                          width={"100%"}
                          h={"100%"}
                          display={"flex"}
                          justifyContent={"right"}
                        >
                          {/* <Button
                            colorScheme="teal"
                            size={"sm"}
                            width={"30%"}
                            type="reset"
                            mr={10}
                            onClick={() => onReset()}
                          >
                            Reset
                          </Button> */}
                          <Button
                            key={"B2"}
                            colorScheme="teal"
                            size={"sm"}
                            width={"30%"}
                            type="reset"
                            mr={10}
                            onClick={() => setFormStep((prev) => prev - 1)}
                          >
                            Back
                          </Button>
                          <Button
                            key={"S2"}
                            type="submit"
                            colorScheme="blue"
                            size={"sm"}
                            width={"30%"}
                            onSubmit={() => onSubmit}
                          >
                            Submit
                          </Button>
                        </Box>
                      )}
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
                            placeholder="2337 1st Main"
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
                            placeholder="13th Lane"
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
                            placeholder="Bengaluru"
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
                            placeholder="INDIA"
                          />
                        </InputGroup>
                        {addressErrors.country && (
                          <Text sx={errorText}>
                            {addressErrors.country?.message}
                          </Text>
                        )}
                      </FormControl>
                    </Box>
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

export default InstructorProfileEditForm;
