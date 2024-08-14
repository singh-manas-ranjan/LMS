"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MdAttachEmail, MdLocalPhone } from "react-icons/md";
import axios, { AxiosError } from "axios";
import { EyeOff, Eye, Lock, User, PenLine } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  gender: string;
}

const errorMsg = {
  color: "red",
  fontSize: { base: "xs", lg: "sm" },
};

const inputField = {
  bg: "#fff",
  fontSize: { base: "sm" },
};

const formLabel = {
  fontSize: { base: "sm", lg: "md" },
};

const formGroupBox = {
  display: "flex",
  flexDir: { base: "column", md: "row" },
  justifyContent: "space-between",
  columnGap: 5,
  rowGap: 5,
  alignItems: "top",
};

type Props = {
  role: "instructors" | "students";
  onClose: () => void;
};

const SignUpForm = ({ role, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>();

  const [show, setShow] = useState(false);

  const router = useRouter();
  const toast = useToast();

  const successToast = () => {
    setTimeout(() => {
      toast({
        title: "Account created Successfully",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
    }, 500);
  };

  const failedToast = (desc: string) => {
    setTimeout(() => {
      toast({
        title: "Error!",
        description: desc,
        status: "error",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
    }, 500);
  };

  const onSubmit = async (e: FormData) => {
    const { firstName, lastName, email, username, password, phone } = e;
    const data = { firstName, lastName, email, username, password, phone };

    try {
      const response = await axios.post(
        // `https://learnopia-backend.vercel.app/api/v1/${role}/register`,
        `http://localhost:3131/api/v1/${role}/register`,
        data
      );

      if (response) {
        reset();
        onClose();
        successToast();
      } else {
        throw Error;
      }
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (axiosError.response?.status === 409) {
          failedToast("Account already exists!");
        }
      } else {
        failedToast("Unable to create account try again later.");
      }
    }
  };

  const validatePassword = (value: string) => {
    const minLength = 8;
    const hasDigit = /\d/;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;
    const hasSpecialChar = /[^\w\s]/;

    if (value.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasDigit.test(value)) {
      return "Password must include at least one digit.";
    }
    if (!hasLowercase.test(value)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasUppercase.test(value)) {
      return "Password needs at least one uppercase letter.";
    }
    if (!hasSpecialChar.test(value)) {
      return "Include at least one special character (e.g., !, @, #, $, %).";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={formGroupBox}>
        <FormControl>
          <FormLabel htmlFor="firstName" sx={formLabel}>
            First Name
          </FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftElement>
              <PenLine size={15} color="grey" />
            </InputLeftElement>
            <Input
              {...register("firstName", {
                required: { value: true, message: "First Name is required" },
                minLength: { value: 3, message: "Minimum 3 character long." },
              })}
              type="text"
              sx={inputField}
              size={{ base: "sm", lg: "md" }}
              placeholder="First Name"
            />
          </InputGroup>
          <Text sx={errorMsg}>{errors.firstName?.message}</Text>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastName" sx={formLabel}>
            Last Name
          </FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftElement>
              <PenLine size={15} color="grey" />
            </InputLeftElement>
            <Input
              {...register("lastName", {
                required: { value: true, message: "Last name is required" },
                minLength: { value: 3, message: "Minimum 3 character long." },
              })}
              placeholder="Last Name"
              type="text"
              sx={inputField}
              size={{ base: "sm", lg: "md" }}
            />
          </InputGroup>
          <Text sx={errorMsg}>{errors.lastName?.message}</Text>
        </FormControl>
      </Box>
      <Box sx={formGroupBox} mt={5}>
        <FormControl>
          <FormLabel htmlFor="email" sx={formLabel}>
            Email
          </FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftElement>
              <MdAttachEmail color="grey" />
            </InputLeftElement>
            <Input
              {...register("email", {
                required: { value: true, message: "Email is required." },
                pattern: {
                  value: /\b[a-z0-9._%+-]+@(?:gmail\.com|outlook\.com)\b/,
                  message: "Only accepts Gmail & Outlook",
                },
              })}
              type="text"
              size={{ base: "sm", lg: "md" }}
              sx={inputField}
              placeholder="example@email.com"
            />
          </InputGroup>
          {errors.email ? (
            <Text sx={errorMsg}>{errors.email?.message}</Text>
          ) : (
            <FormHelperText fontSize={"xs"}>
              We&apos;ll never share your email.
            </FormHelperText>
          )}
        </FormControl>
        {/* <FormControl>
          <FormLabel fontSize={"sm"}>Phone</FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftElement>
              <MdLocalPhone color="grey" />
            </InputLeftElement>
            <Input
              {...register("phone", {
                required: { value: true, message: "Phone No. is required." },
                minLength: { value: 10, message: "Enter valid phone number" },
                maxLength: { value: 15, message: "Enter valid phone number." },
              })}
              type="tel"
              placeholder="phone number"
              size={"sm"}
            />
          </InputGroup>
          <Text sx={errorMsg}>{errors.phone?.message}</Text>
        </FormControl> */}
        <FormControl>
          <FormLabel htmlFor="lastName" sx={formLabel}>
            Phone
          </FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftElement>
              <MdLocalPhone size={15} color="grey" />
            </InputLeftElement>
            <Input
              {...register("phone", {
                required: { value: true, message: "Phone No. is required." },
                minLength: { value: 10, message: "Enter valid phone number" },
                maxLength: { value: 15, message: "Enter valid phone number." },
              })}
              placeholder="Phone number"
              type="tel"
              sx={inputField}
              size={{ base: "sm", lg: "md" }}
            />
          </InputGroup>
          <Text sx={errorMsg}>{errors.phone?.message}</Text>
        </FormControl>
      </Box>
      <Box sx={formGroupBox} mt={5}>
        <FormControl>
          <FormLabel htmlFor="username" sx={formLabel}>
            Username
          </FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftElement>
              <User size={15} color="grey" />
            </InputLeftElement>
            <Input
              {...register("username", {
                required: { value: true, message: "Username is required" },
                minLength: { value: 5, message: "Min 5 characters long" },
              })}
              type="text"
              size={{ base: "sm", lg: "md" }}
              placeholder="Username"
              sx={inputField}
            />
          </InputGroup>
          <Text sx={errorMsg}>{errors.username?.message}</Text>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password" sx={formLabel}>
            Password
          </FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftElement>
              <Lock size={15} color="grey" />
            </InputLeftElement>
            <Input
              {...register("password", {
                required: { value: true, message: "Password is required" },
                validate: validatePassword,
              })}
              type={show ? "text" : "password"}
              size={{ base: "sm", lg: "md" }}
              placeholder="Password"
              sx={inputField}
            />
            <InputRightElement height={"100%"} width={"fit-content"} pr={1}>
              <Button
                size="xs"
                onClick={() => setShow((prev) => !prev)}
                p={0}
                bg={"none"}
                _hover={{ bg: "none" }}
              >
                {show ? <EyeOff size={15} /> : <Eye size={15} color="grey" />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text sx={errorMsg}>{errors.password?.message}</Text>
        </FormControl>
      </Box>
      {/* <FormControl mt={5}>
        <FormLabel htmlFor="gender" sx={formLabel}>
          Gender
        </FormLabel>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioGroup
              onChange={field.onChange}
              value={field.value}
              name={field.name}
              size={{ base: "sm", lg: "md" }}
            >
              <Stack direction="row" spacing={5}>
                <Radio value="M">Male</Radio>
                <Radio value="F">Female</Radio>
                <Radio value="O">Other</Radio>
              </Stack>
            </RadioGroup>
          )}
        />
      </FormControl> */}
      {/* <FormControl mt={5} fontSize={{ base: "sm", lg: "md" }}>
        <Text>
          Already have account ?{" "}
          <Link href={"/login"} style={{ color: "#0275d8" }}>
            Sign in
          </Link>
        </Text>
      </FormControl> */}
      <FormControl>
        <Stack direction={"row"} spacing={5}>
          <Button
            mt={5}
            type="submit"
            onSubmit={handleSubmit(onSubmit)}
            colorScheme="blue"
            size={{ base: "sm", lg: "md" }}
          >
            Register
          </Button>
          <Button
            mt={5}
            type="reset"
            onSubmit={() => reset}
            colorScheme="teal"
            size={{ base: "sm", lg: "md" }}
          >
            Reset
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};

export default SignUpForm;
