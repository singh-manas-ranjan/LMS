"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { validatePassword } from "../../auth/signUp/SignUpForm";
import axios, { AxiosError } from "axios";
import { refreshToken } from "../../navbar/Navbar";

type FormType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormType>();

  const toast = useToast();

  function showToastMessage(title: string, status: "success" | "error") {
    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  }

  const onSubmit = async (data: FormType) => {
    try {
      await axios.post(
        "https://learnopia-backend.vercel.app/api/v1/students/password",
        { oldPassword: data.currentPassword, newPassword: data.newPassword },
        { withCredentials: true }
      );

      showToastMessage("Password updated successfully", "success");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response && axiosError.response.status === 401) {
          try {
            await refreshToken();
            await axios.post(
              "https://learnopia-backend.vercel.app/api/v1/students/password",
              {
                oldPassword: data.currentPassword,
                newPassword: data.newPassword,
              },
              { withCredentials: true }
            );

            showToastMessage("Password updated successfully", "success");
          } catch (refreshError) {
            showToastMessage(
              "Error updating password after refreshing token",
              "error"
            );
          }
        } else {
          showToastMessage("Error updating password", "error");
        }
      } else {
        showToastMessage("Unexpected error occurred", "error");
      }
    } finally {
      reset();
    }
  };

  const [show, setShow] = useState({
    currentPassword: false,
    newPassword: false,
  });

  const inputField = {
    bg: "#fff",
    fontSize: { base: "sm" },
  };

  const errorMsg = {
    color: "red",
    fontSize: { base: "xs", lg: "sm" },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl color={"#364A63"} width={{ md: "30rem" }}>
        <FormLabel fontSize={{ base: "sm" }}>Current Password</FormLabel>
        <InputGroup size={{ base: "sm" }}>
          <InputLeftElement>
            <LockIcon size={15} color="grey" />
          </InputLeftElement>
          <Input
            {...register("currentPassword", {
              required: { value: true, message: "Current password required." },
            })}
            type={show.currentPassword ? "text" : "password"}
            placeholder="Current Password"
          />
          <InputRightElement height={"100%"} width={"fit-content"} pr={1}>
            <Button
              size="xs"
              onClick={() =>
                setShow({ ...show, currentPassword: !show.currentPassword })
              }
              p={0}
              bg={"none"}
              _hover={{ bg: "none" }}
            >
              {show.currentPassword ? (
                <EyeOffIcon size={15} />
              ) : (
                <EyeIcon size={15} color="grey" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text sx={errorMsg}>{errors.currentPassword?.message}</Text>
      </FormControl>
      <FormControl width={{ md: "30rem" }} color={"#364A63"} mt={5}>
        <FormLabel htmlFor="password" fontSize={"sm"}>
          New Password
        </FormLabel>
        <InputGroup size={{ base: "sm", lg: "md" }}>
          <InputLeftElement>
            <LockIcon size={15} color="grey" />
          </InputLeftElement>
          <Input
            {...register("newPassword", {
              required: { value: true, message: "Password is required" },
              validate: validatePassword,
            })}
            type={show.newPassword ? "text" : "password"}
            size={{ base: "sm", lg: "md" }}
            placeholder="Password"
            sx={inputField}
          />
          <InputRightElement height={"100%"} width={"fit-content"} pr={1}>
            <Button
              size="xs"
              onClick={() =>
                setShow({ ...show, newPassword: !show.newPassword })
              }
              p={0}
              bg={"none"}
              _hover={{ bg: "none" }}
            >
              {show.newPassword ? (
                <EyeOffIcon size={15} />
              ) : (
                <EyeIcon size={15} color="grey" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text sx={errorMsg}>{errors.newPassword?.message}</Text>
      </FormControl>
      <FormControl width={{ md: "30rem" }} color={"#364A63"} mt={5}>
        <FormLabel htmlFor="password" fontSize={"sm"}>
          Confirm Password
        </FormLabel>
        <InputGroup size={{ base: "sm", lg: "md" }}>
          <InputLeftElement>
            <LockIcon size={15} color="grey" />
          </InputLeftElement>
          <Input
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is required",
              },
              validate: (value) =>
                value === getValues("newPassword") || "Password must match.",
            })}
            type="password"
            size={{ base: "sm", lg: "md" }}
            placeholder="Password"
            sx={inputField}
          />
        </InputGroup>
        <Text sx={errorMsg}>{errors.confirmPassword?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <Button type="submit" id="submit" colorScheme="blue" size={"sm"}>
          Update Password
        </Button>
      </FormControl>
    </form>
  );
};

export default UpdatePassword;
