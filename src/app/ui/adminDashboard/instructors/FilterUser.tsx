"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export interface TFilter {
  name: string;
  location: string;
  course: string;
}

const FilterUser = () => {
  const searchParams = useSearchParams();
  const searchValues: TFilter = {
    name: searchParams.get("name") ?? "",
    location: searchParams.get("location") ?? "",
    course: searchParams.get("course") ?? "",
  };
  const { register, handleSubmit, control } = useForm<TFilter>({
    values: searchValues,
  });

  const router = useRouter();
  const pathName = usePathname();

  const onSubmit = async (data: TFilter) => {
    const filteredData: Record<string, string> = {};

    if (data.name) filteredData.name = data.name;
    if (data.location) filteredData.location = data.location;
    if (data.course) filteredData.course = data.course;

    const query = new URLSearchParams(filteredData).toString();
    router.push(`${pathName}?${query}`);
  };

  const handleClear = () => {
    router.push(pathName);
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
          <FormLabel fontSize={"sm"}>Search By Location</FormLabel>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Select size={"sm"} placeholder="Select location" {...field}>
                <option value="Bengaluru">Bengaluru </option>
                <option value="Hyderabad ">Hyderabad </option>
                <option value="Pune">Pune </option>
                <option value="Noida">Noida </option>
                <option value="New Delhi">New Delhi </option>
                <option value="Gurugram">Gurugram </option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormLabel fontSize={"sm"}>Search By Course</FormLabel>
          <Controller
            name="course"
            control={control}
            render={({ field }) => (
              <Select size={"sm"} placeholder="Select course" {...field}>
                <option value="Software Testing">Software Testing</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="DevOps">DevOps</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Database">Database</option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl mt={5} display={"grid"} rowGap={3}>
          <Button
            type="button"
            colorScheme="orange"
            size={"sm"}
            onClick={() => handleClear()}
          >
            Clear
          </Button>
          <Button type="submit" colorScheme="teal" size={"sm"}>
            Search
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default FilterUser;
