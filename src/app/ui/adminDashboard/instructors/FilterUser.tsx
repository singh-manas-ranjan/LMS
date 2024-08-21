"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface TFilter {
  name: string;
  location: string;
  course: string;
}

const FilterUser = () => {
  const { register, handleSubmit, control } = useForm<TFilter>();

  const onSubmit = async (data: TFilter) => {
    const filteredData: Record<string, string> = {};

    if (data.name) filteredData.name = data.name;
    if (data.location) filteredData.location = data.location;
    if (data.course) filteredData.course = data.course;

    const query = new URLSearchParams(filteredData).toString();

    // router.push({
    //   pathname: router.pathname,
    //   query: query,
    // });

    console.log(query);
  };
  return (
    <Box width={{ base: "100%" }} paddingInline={{ md: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl w={"100%"}>
          <FormLabel fontSize={"sm"}>Search By Name</FormLabel>
          <Input
            {...register("name")}
            type="text"
            size={"sm"}
            placeholder="Name"
            borderRadius={4}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormLabel fontSize={"sm"}>Location</FormLabel>
          <Controller
            name="location"
            control={control}
            render={(fields) => (
              <Select size={"sm"} placeholder="Select location" {...fields}>
                <option>Bengaluru</option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormLabel fontSize={"sm"}>Course</FormLabel>
          <Controller
            name="course"
            control={control}
            render={(fields) => (
              <Select size={"sm"} placeholder="Select course" {...fields}>
                <option>JavaScript</option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl mt={5} display={"grid"}>
          <Button type="submit" colorScheme="teal" size={"sm"}>
            Search
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default React.memo(FilterUser);
