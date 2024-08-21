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
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
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
import { Select as ChakraSelect, MultiValue } from "chakra-react-select";

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
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });

  const {
    fields: achievementFields,
    append: appendAchievement,
    remove: removeAchievement,
  } = useFieldArray({
    control,
    name: "achievements",
  });

  const {
    register: addressRegister,
    handleSubmit: addressHandleSubmit,
    formState: { errors: addressErrors },
  } = useForm<TAddress>({
    values: userInfo.address,
  });

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

  type TServices = {
    value: string;
    label: string;
  };

  const servicesOptions: TServices[] = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Cyber Security", label: "Cyber Security" },
    { value: "Manual Testing", label: "Manual Testing" },
    { value: "Automation Testing", label: "Automation Testing" },
    { value: "API Testing", label: "API Testing" },
    { value: "Integration Testing", label: "Integration Testing" },
    { value: "Security Testing", label: "Security Testing" },
    { value: "Performance Testing", label: "Performance Testing" },
    { value: "UI/UX Designing", label: "UI/UX Designing" },
    { value: "HTML/CSS", label: "HTML/CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React/Next", label: "React/Next" },
    { value: "Angular", label: "Angular" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "API Integration", label: "API Integration" },
    { value: "CI/CD", label: "CI/CD" },
    { value: "RESTful", label: "RESTful" },
    { value: "DBMS", label: "DBMS" },
    { value: "Express", label: "Express" },
    { value: "Node.js", label: "Node.js" },
    { value: "MongoDb", label: "MongoDb" },
    { value: "Mongoose", label: "Mongoose" },
    { value: "MySQL", label: "MySQL" },
    { value: "AWS", label: "AWS" },
    { value: "Azure", label: "Azure" },
    { value: "Database Design", label: "Database Design" },
    { value: "Software Architecture", label: "Software Architecture" },
    { value: "DevOps", label: "DevOps" },
    { value: "Serverless Computing", label: "Serverless Computing" },
    { value: "Data Analytics", label: "Data Analytics" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Blockchain Development", label: "Blockchain Development" },
    { value: "IoT Development", label: "IoT Development" },
    { value: "Augmented Reality", label: "Augmented Reality" },
    { value: "Virtual Reality", label: "Virtual Reality" },
    {
      value: "Content Management Systems",
      label: "Content Management Systems",
    },
    { value: "E-commerce Solutions", label: "E-commerce Solutions" },
    { value: "CRM Systems", label: "CRM Systems" },
    { value: "API Development", label: "API Development" },
    { value: "Web Hosting", label: "Web Hosting" },
    { value: "Technical SEO", label: "Technical SEO" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Social Media Management", label: "Social Media Management" },
    { value: "Content Creation", label: "Content Creation" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Video Production", label: "Video Production" },
    { value: "User Research", label: "User Research" },
    { value: "Accessibility Testing", label: "Accessibility Testing" },
    { value: "Load Testing", label: "Load Testing" },
    { value: "Cross-Browser Testing", label: "Cross-Browser Testing" },
    { value: "Penetration Testing", label: "Penetration Testing" },
    { value: "Incident Management", label: "Incident Management" },
    { value: "Disaster Recovery", label: "Disaster Recovery" },
    { value: "Network Configuration", label: "Network Configuration" },
    { value: "Virtualization", label: "Virtualization" },
    { value: "API Documentation", label: "API Documentation" },
    { value: "Data Migration", label: "Data Migration" },
    { value: "Cloud Migration", label: "Cloud Migration" },
    { value: "Server Management", label: "Server Management" },
    { value: "Network Security", label: "Network Security" },
    { value: "Endpoint Protection", label: "Endpoint Protection" },
    {
      value: "Disaster Recovery Planning",
      label: "Disaster Recovery Planning",
    },
    { value: "Business Intelligence", label: "Business Intelligence" },
    { value: "Big Data Solutions", label: "Big Data Solutions" },
    { value: "Data Warehousing", label: "Data Warehousing" },
    { value: "Real-Time Data Processing", label: "Real-Time Data Processing" },
    { value: "Data Visualization", label: "Data Visualization" },
    {
      value: "Custom Software Development",
      label: "Custom Software Development",
    },
    { value: "SaaS Development", label: "SaaS Development" },
    { value: "PaaS Development", label: "PaaS Development" },
    {
      value: "Desktop Application Development",
      label: "Desktop Application Development",
    },
    {
      value: "Cross-Platform Development",
      label: "Cross-Platform Development",
    },
    {
      value: "Microservices Architecture",
      label: "Microservices Architecture",
    },
    { value: "Server Maintenance", label: "Server Maintenance" },
    { value: "Remote Monitoring", label: "Remote Monitoring" },
    { value: "IT Support", label: "IT Support" },
    { value: "Technical Writing", label: "Technical Writing" },
    { value: "Mobile UI/UX Design", label: "Mobile UI/UX Design" },
    { value: "API Security", label: "API Security" },
    { value: "Performance Optimization", label: "Performance Optimization" },
    { value: "Code Review", label: "Code Review" },
    { value: "Version Control", label: "Version Control" },
    { value: "Agile Coaching", label: "Agile Coaching" },
    { value: "Project Management", label: "Project Management" },
    { value: "IT Consulting", label: "IT Consulting" },
    { value: "Compliance Auditing", label: "Compliance Auditing" },
    { value: "Regulatory Compliance", label: "Regulatory Compliance" },
    { value: "Penetration Testing", label: "Penetration Testing" },
    { value: "Ethical Hacking", label: "Ethical Hacking" },
    { value: "Vulnerability Assessment", label: "Vulnerability Assessment" },
    { value: "Risk Management", label: "Risk Management" },
    { value: "Incident Response", label: "Incident Response" },
    { value: "Forensic Analysis", label: "Forensic Analysis" },
    { value: "Digital Forensics", label: "Digital Forensics" },
    { value: "System Integration", label: "System Integration" },
    { value: "API Management", label: "API Management" },
    { value: "CRM Integration", label: "CRM Integration" },
    { value: "ERP Integration", label: "ERP Integration" },
    {
      value: "Business Process Automation",
      label: "Business Process Automation",
    },
    {
      value: "IT Infrastructure Management",
      label: "IT Infrastructure Management",
    },
    { value: "Hardware Installation", label: "Hardware Installation" },
    {
      value: "Virtual Desktop Infrastructure",
      label: "Virtual Desktop Infrastructure",
    },
    { value: "Knowledge Management", label: "Knowledge Management" },
    { value: "Workflow Automation", label: "Workflow Automation" },
    { value: "Mobile Device Management", label: "Mobile Device Management" },
    {
      value: "Software as a Service (SaaS)",
      label: "Software as a Service (SaaS)",
    },
    {
      value: "Platform as a Service (PaaS)",
      label: "Platform as a Service (PaaS)",
    },
  ];

  const onSubmit = async (e: TUser) => {
    onClose();
    console.log(e);

    handleUpdateInstructor(e);
    console.log(e);

    try {
      const response = await axios.patch(
        `https://learnopia-backend.vercel.app/api/v1/instructors/${userId}`,
        e
      );
      if (response.data.body) {
        displayToast("Success", "success", "Updated Successfully");
        removeUserInfoFromLocalStorage();
        addUserInfoToLocalStorage(e);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      handleUpdateInstructor(userInfo);
      console.error(error);
    }
  };

  const onAddressSubmit = async (e: TAddress) => {
    onClose();
    console.log(e);
    handleUpdateInstructor({ ...userInfo, address: e });
    try {
      const response = await axios.patch(
        `https://learnopia-backend.vercel.app/api/v1/instructors/${userId}`,
        { ...userInfo, address: e }
      );
      if (response.data.body) {
        displayToast("Success", "success", "Updated Successfully");
        removeUserInfoFromLocalStorage();
        addUserInfoToLocalStorage({ ...userInfo, address: e });
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      handleUpdateInstructor(userInfo);
      console.error(error);
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
                <TabPanel paddingInline={{ base: 0, md: 2 }}>
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
                                  field.onChange(
                                    selected.map((optn) => optn.value)
                                  )
                                }
                                value={field.value?.map((value) => ({
                                  value,
                                  label: value,
                                }))}
                                options={languageOptions.sort((a, b) =>
                                  a.label.localeCompare(b.label)
                                )}
                                size={"sm"}
                              />
                            )}
                          />
                        </FormControl>
                        <FormControl mt={5}>
                          <FormLabel fontSize={"sm"}>Services</FormLabel>
                          <Controller
                            name="services"
                            control={control}
                            render={({ field }) => (
                              <ChakraSelect
                                {...field}
                                isMulti
                                onChange={(selected: MultiValue<TServices>) =>
                                  field.onChange(
                                    selected.map((optn) => optn.value)
                                  )
                                }
                                value={field.value?.map((value) => ({
                                  value,
                                  label: value,
                                }))}
                                options={servicesOptions.sort((a, b) =>
                                  a.label.localeCompare(b.label)
                                )}
                                size={"sm"}
                              />
                            )}
                          />
                        </FormControl>
                      </Box>
                    )}
                    {formStep === 2 && (
                      <Box w={"100%"} h={"100%"}>
                        <FormControl>
                          <FormLabel fontSize={"sm"}>
                            Education Details
                          </FormLabel>
                          <VStack spacing={1}>
                            {educationFields.map((item, idx) => (
                              <Box key={item.id} mb={4}>
                                <Input
                                  size={"xs"}
                                  placeholder="Degree"
                                  {...register(`education.${idx}.degree`, {
                                    required: true,
                                  })}
                                />
                                <Input
                                  size={"xs"}
                                  placeholder="Institution"
                                  {...register(`education.${idx}.institution`, {
                                    required: true,
                                  })}
                                />
                                <Input
                                  size={"xs"}
                                  placeholder="Passing Year"
                                  {...register(`education.${idx}.passingYear`, {
                                    required: true,
                                  })}
                                />
                                <Button
                                  onClick={() => removeEducation(idx)}
                                  mt={2}
                                  size={"xs"}
                                  borderRadius={4}
                                  colorScheme="red"
                                >
                                  Remove
                                </Button>
                              </Box>
                            ))}
                            <Box
                              display={"flex"}
                              w={"100%"}
                              justifyContent={"end"}
                            >
                              <Button
                                size={"xs"}
                                colorScheme="green"
                                borderRadius={4}
                                float={"right"}
                                onClick={() =>
                                  appendEducation({
                                    degree: "",
                                    institution: "",
                                    passingYear: "",
                                  })
                                }
                              >
                                Add Details
                              </Button>
                            </Box>
                          </VStack>
                        </FormControl>
                        <FormControl mt={5}>
                          <FormLabel fontSize={"sm"}></FormLabel>
                        </FormControl>
                      </Box>
                    )}
                    {formStep === 3 && (
                      <Box w={"100%"} h={"100%"}>
                        <FormControl>
                          <FormLabel fontSize={"sm"}>
                            Experience Details
                          </FormLabel>
                          <VStack spacing={1}>
                            {experienceFields.map((item, idx) => (
                              <Box key={item.id} mb={4} w={"100%"}>
                                <Input
                                  size={"xs"}
                                  placeholder="Organization"
                                  {...register(
                                    `experience.${idx}.organization`,
                                    {
                                      required: true,
                                    }
                                  )}
                                />
                                <Input
                                  size={"xs"}
                                  placeholder="Role"
                                  {...register(`experience.${idx}.role`, {
                                    required: true,
                                  })}
                                />
                                <Input
                                  size={"xs"}
                                  placeholder="Years of experience"
                                  {...register(`experience.${idx}.years`, {
                                    required: true,
                                  })}
                                />
                                <Button
                                  onClick={() => removeExperience(idx)}
                                  mt={2}
                                  size={"xs"}
                                  borderRadius={4}
                                  colorScheme="red"
                                >
                                  Remove
                                </Button>
                              </Box>
                            ))}
                            <Box
                              display={"flex"}
                              w={"100%"}
                              justifyContent={"end"}
                            >
                              <Button
                                size={"xs"}
                                colorScheme="green"
                                borderRadius={4}
                                float={"right"}
                                onClick={() =>
                                  appendExperience({
                                    organization: "",
                                    role: "",
                                    years: "",
                                  })
                                }
                              >
                                Add Details
                              </Button>
                            </Box>
                          </VStack>
                        </FormControl>
                        <FormControl mt={5}>
                          <FormLabel fontSize={"sm"}></FormLabel>
                        </FormControl>
                      </Box>
                    )}
                    {formStep === 4 && (
                      <Box w={"100%"} h={"100%"}>
                        <FormControl>
                          <FormLabel fontSize={"sm"}>
                            Awards and Recognitions
                          </FormLabel>
                          <VStack spacing={1}>
                            {achievementFields.map((item, idx) => (
                              <Box key={item.id} mb={4} w={"100%"}>
                                <Input
                                  size={"xs"}
                                  placeholder="Achievement Title"
                                  {...register(`achievements.${idx}.title`, {
                                    required: true,
                                  })}
                                />

                                <Input
                                  size={"xs"}
                                  placeholder="Awarded Year"
                                  {...register(`achievements.${idx}.year`, {
                                    required: true,
                                  })}
                                />
                                <Button
                                  onClick={() => removeAchievement(idx)}
                                  mt={2}
                                  size={"xs"}
                                  borderRadius={4}
                                  colorScheme="red"
                                >
                                  Remove
                                </Button>
                              </Box>
                            ))}
                            <Box
                              display={"flex"}
                              w={"100%"}
                              justifyContent={"end"}
                            >
                              <Button
                                size={"xs"}
                                colorScheme="green"
                                borderRadius={4}
                                float={"right"}
                                onClick={() =>
                                  appendAchievement({
                                    title: "",
                                    year: "",
                                  })
                                }
                              >
                                Add Details
                              </Button>
                            </Box>
                          </VStack>
                        </FormControl>
                        <FormControl mt={5}>
                          <FormLabel fontSize={"sm"}></FormLabel>
                        </FormControl>
                      </Box>
                    )}

                    <ModalFooter pr={0} pb={2} pt={{ base: 5, md: 10 }}>
                      {formStep < 4 && (
                        <Box
                          width={"100%"}
                          h={"100%"}
                          display={"flex"}
                          justifyContent={"right"}
                        >
                          {formStep > 0 && (
                            <Button
                              key={"B1"}
                              colorScheme="teal"
                              size={"sm"}
                              borderRadius={4}
                              width={"30%"}
                              mr={10}
                              onClick={() =>
                                setFormStep((prev) =>
                                  prev === 0 ? prev : prev - 1
                                )
                              }
                            >
                              Back
                            </Button>
                          )}
                          <Button
                            key={"S1"}
                            colorScheme="blue"
                            size={"sm"}
                            borderRadius={4}
                            width={"30%"}
                            onClick={() => setFormStep((prev) => prev + 1)}
                          >
                            Next
                          </Button>
                        </Box>
                      )}
                      {formStep === 4 && (
                        <Box
                          width={"100%"}
                          h={"100%"}
                          display={"flex"}
                          justifyContent={"right"}
                        >
                          <Button
                            key={"B2"}
                            colorScheme="teal"
                            size={"sm"}
                            borderRadius={4}
                            width={"30%"}
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
                            borderRadius={4}
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
                    <ModalFooter pr={0} pb={2} pt={{ base: 5, md: 10 }}>
                      <Button
                        key={"S2"}
                        type="submit"
                        colorScheme="blue"
                        size={"sm"}
                        borderRadius={4}
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

export default InstructorProfileEditForm;
