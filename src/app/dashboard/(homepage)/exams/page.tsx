import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const main = {
  width: "100%",
  height: "100%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  overflow: "hidden",
};
const Exams = () => {
  return (
    <Box as="main" sx={main}>
      <Heading>Exams</Heading>
    </Box>
  );
};

export default Exams;
