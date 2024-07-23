"use client";
import {
  Button,
  FormControl,
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
import axios, { AxiosError } from "axios";
import { Lock, Eye, EyeOff, User } from "lucide-react";
interface FormType {
  username: string;
  password: string;
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

type TAuth = {
  role: "ADMIN" | "INSTRUCTOR" | "STUDENTS";
  successPath: string;
};

type Props = {
  access: TAuth;
  onClose: () => void;
};

const SignInForm = ({ access: { role, successPath }, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>();

  const [show, setShow] = useState(false);

  const router = useRouter();
  const toast = useToast();

  const showSuccessToast = async () => {
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to your dashboard.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }, 500);
  };

  const showFailedToast = async (desc: string) => {
    setTimeout(() => {
      toast({
        title: "Login Failed",
        description: desc,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }, 500);
  };

  const onSubmit = async (e: FormType) => {
    const body = { ...e };
    reset();
    try {
      const response = await axios.post(
        `http://localhost:3131/api/v1/${role.toLocaleLowerCase()}/login`,
        body
      );
      if (response.status === 200) {
        onClose();
        localStorage.setItem("userInfo", JSON.stringify(response.data.body));
        router.push(successPath);
        showSuccessToast();
      }
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        switch (axiosError.response?.status) {
          case 401:
            showFailedToast("Invalid credentials");
            break;
          case 404:
            showFailedToast("Invalid credentials");
            break;
          default:
            showFailedToast("Something went wrong");
        }
      } else {
        showFailedToast("Unable to Sign In, please try again ");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              required: { value: true, message: "username is required." },
            })}
            type="text"
            sx={inputField}
            size={{ base: "sm", lg: "md" }}
            placeholder="username"
          />
        </InputGroup>
        <Text sx={errorMsg}>{errors.username?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="password" sx={formLabel}>
          Password
        </FormLabel>
        <InputGroup size={"sm"}>
          <InputLeftElement>
            <Lock size={15} color="grey" />
          </InputLeftElement>
          <Input
            {...register("password", {
              required: { value: true, message: "password is required" },
            })}
            type={show ? "text" : "password"}
            sx={inputField}
            size={{ base: "sm", lg: "md" }}
            placeholder="password"
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
      {/* <FormControl mt={5} fontSize={{ base: "sm", lg: "md" }}>
        <Text>
          Not registered ?{" "}
          <Link href={"/register"} style={{ color: "#0275d8" }}>
            Register
          </Link>
        </Text>
      </FormControl> */}
      <FormControl>
        <Stack direction={"row"} spacing={5}>
          <Button
            type="submit"
            mt={5}
            onSubmit={handleSubmit(onSubmit)}
            colorScheme="blue"
            size={{ base: "sm", lg: "md" }}
          >
            Sign in
          </Button>
          <Button
            type="reset"
            mt={5}
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

export default SignInForm;
