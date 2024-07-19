"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

type FormType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();
  const onSubmit = (e: FormType) => {
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl color={"#364A63"}>
        <FormLabel fontSize={{ base: "sm", lg: "md" }}>
          Current Password
        </FormLabel>
        <InputGroup
          {...register("currentPassword")}
          size={{ base: "sm", lg: "md" }}
        >
          <Input
            type="password"
            placeholder="Current Password"
            width={{ md: "30rem" }}
          />
        </InputGroup>
      </FormControl>
      <FormControl mt={5} color={"#364A63"}>
        <FormLabel fontSize={{ base: "sm", lg: "md" }}>New Password</FormLabel>
        <InputGroup
          {...register("newPassword")}
          size={{ base: "sm", lg: "md" }}
        >
          <Input
            type="password"
            placeholder="New Password"
            width={{ md: "30rem" }}
          />
        </InputGroup>
      </FormControl>
      <FormControl mt={5} color={"#364A63"}>
        <FormLabel fontSize={{ base: "sm", lg: "md" }}>
          Confirm Password
        </FormLabel>
        <InputGroup
          {...register("confirmPassword")}
          size={{ base: "sm", lg: "md" }}
        >
          <Input
            type="password"
            placeholder="Confirm Password"
            width={{ md: "30rem" }}
          />
        </InputGroup>
      </FormControl>
      <FormControl mt={5}>
        <Button
          onSubmit={() => reset()}
          type="reset"
          id="reset"
          colorScheme="teal"
          size={"sm"}
        >
          Reset
        </Button>
        <Button
          onSubmit={handleSubmit(onSubmit)}
          type="submit"
          id="submit"
          colorScheme="blue"
          size={"sm"}
          ml={5}
        >
          Reset Password
        </Button>
      </FormControl>
    </form>
  );
};

export default ResetPassword;
