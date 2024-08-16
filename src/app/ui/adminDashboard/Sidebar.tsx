"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { House, Menu, NotebookIcon, Settings, User, X } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { endpoints } from "./Navbar";

const Sidebar = ({ studentId }: { studentId: string }) => {
  const pathname = usePathname();
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const handleToggleSidebar = () => {
    setSidebarExpanded((prev) => !prev);
  };

  const sidebarWidth = useBreakpointValue({
    base: "80px",
    md: isSidebarExpanded ? "200px" : "80px",
  });

  const open = {
    width: "100%",
    opacity: "1",
    display: "flex",
    transition: "all 1s ease-in-out",
  };
  const close = {
    display: "none",
    width: "0",
    opacity: "0",
    overflow: "hidden",
  };

  return (
    <Box
      zIndex={99}
      as="nav"
      w={sidebarWidth}
      color="#044F63"
      transition="width 0.2s ease"
      pos="fixed"
      h="full"
      overflowY="auto"
      bg="#fff"
      borderRight="1px"
      borderColor="gray.200"
      display={{ base: "none", sm: "flex" }}
    >
      <Flex direction="column" p="4" mt={20}>
        <IconButton
          aria-label="Toggle Menu"
          icon={isSidebarExpanded ? <X size={18} /> : <Menu size={18} />}
          onClick={handleToggleSidebar}
          mb="4"
          colorScheme="gray"
          size={"sm"}
          width={"50px"}
        />
        <Flex direction="column" rowGap="5" mt={5}>
          {endpoints.map((link, idx) => {
            const IconComponent = link.icon;
            return (
              <NextLink
                key={idx}
                href={`/admin/students/${studentId}/${link.href}`}
              >
                <Box
                  p={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  columnGap={4}
                  _hover={{ textDecoration: "none" }}
                >
                  <Box as={IconComponent} color="#044F63" size={20} />
                  {
                    <Text sx={isSidebarExpanded ? open : close}>
                      {link.name}
                    </Text>
                  }
                </Box>
              </NextLink>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
