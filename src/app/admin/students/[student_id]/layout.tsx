import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
const main = {
  width: "100%",
  height: "100dvh",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  bg: "#ffffff",
};
const AdminStudentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      as="main"
      sx={main}
      rowGap={5}
      overflow={"hidden"}
      alignContent={"center"}
    >
      {children}
    </Box>
  );
};

export default AdminStudentLayout;
