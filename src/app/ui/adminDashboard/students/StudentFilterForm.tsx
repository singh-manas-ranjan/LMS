"use client";
import { Box, Button, FormControl, Input, Select } from "@chakra-ui/react";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter, usePathname } from "next/navigation";
import { TUser } from "../../navbar/Navbar";

type SearchType = "name" | "course" | "location";

interface TSearch {
  search: string;
  searchBy: SearchType;
}

const StudentFilterForm = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { register, handleSubmit, control, reset } = useForm<TSearch>();

  function onSubmit(data: TSearch) {
    const query = new URLSearchParams({
      [data.searchBy]: data.search,
    }).toString();
    router.push(`${pathname}?${query}`);
    console.log(query);
  }

  const handleClear = () => {
    reset();
    router.push(pathname);
  };

  return (
    <Box width={"100%"} pr={{ base: 5, md: 10 }}>
      <form
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box display={"grid"} rowGap={3}>
          <FormControl>
            <Input
              size={{ base: "xs", md: "sm" }}
              placeholder={"search..."}
              {...register("search", { required: true })}
            />
          </FormControl>
          <Box display={"flex"} columnGap={5}>
            <FormControl>
              <Controller
                name="searchBy"
                control={control}
                defaultValue="name"
                render={({ field }) => (
                  <Select {...field} size={{ base: "xs", md: "sm" }}>
                    <option value="name">Name</option>
                    <option value="course">Course</option>
                    <option value="location">Location</option>
                  </Select>
                )}
              />
            </FormControl>
            <FormControl display={"flex"} columnGap={3}>
              <Button
                size={{ base: "xs", md: "sm" }}
                type="button"
                colorScheme="orange"
                borderRadius={4}
                onClick={() => handleClear()}
              >
                Clear
              </Button>
              <Button
                colorScheme="teal"
                size={{ base: "xs", md: "sm" }}
                borderRadius={4}
                type="submit"
              >
                Search
              </Button>
            </FormControl>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default React.memo(StudentFilterForm);
