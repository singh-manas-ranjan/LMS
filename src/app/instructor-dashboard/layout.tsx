import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/navbar/Navbar";

const instructorSidebarLinks = {
  Dashboard: [
    { name: "Dashboard", icon: "dashboard", link: "/instructor-dashboard" },
    { name: "Courses", icon: "courses", link: "/instructor-dashboard/courses" },
    {
      name: "Instructors",
      icon: "person",
      link: "/instructor-dashboard/instructors",
    },
    {
      name: "Students",
      icon: "multiPersons",
      link: "/instructor-dashboard/students",
    },
    {
      name: "Messages",
      icon: "message",
      link: "/instructor-dashboard/messages",
    },
  ],
  Settings: [
    { name: "Profile", icon: "profile", link: "/instructor-dashboard/profile" },
    {
      name: "Settings",
      icon: "settings",
      link: "/instructor-dashboard/settings",
    },
  ],
};

interface Props {
  children: ReactNode;
}

const DashBoardLayout = ({ children }: Props) => {
  const container = {
    w: "100%",
    h: "100vh",
    display: "flex",
    bg: "#EFF8FF",
  };

  const menuContainer = {
    paddingRight: { sm: "1rem" },
    h: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const nav_content_container = {
    flex: "6",
    display: "flex",
    flexDirection: "column",
    h: "100%",
    rowGap: "1rem",
    // overflowY: "scroll",
  };

  return (
    <Box as="main" sx={container}>
      <Box sx={menuContainer} width={"fit-content"}>
        <Sidebar navLinks={instructorSidebarLinks} />
      </Box>
      <Box sx={nav_content_container}>
        <Navbar navLinks={instructorSidebarLinks} />
        {children}
      </Box>
    </Box>
  );
};

export default DashBoardLayout;
