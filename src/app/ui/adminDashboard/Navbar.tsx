"use client";

import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  useMediaQuery,
  Link,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { TbLogout2 } from "react-icons/tb";
import { FaHandsClapping } from "react-icons/fa6";
import { TUser } from "../navbar/Navbar";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { X, MenuIcon, House, NotebookIcon, User, Settings } from "lucide-react";

const profile = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: ".5rem",
  padding: ".3rem",
  color: "#044F63",
};

const notificationContainer = {
  justifyContent: "center",
  alignItems: "center",
};

const button = {
  bg: "none",
  border: "none",
  display: "flex",
  maxWidth: "fit-content",
  outline: "none",
  borderRadius: { base: "50%", sm: 6 },
  p: { base: 0, sm: 5 },
};

const link = {
  padding: ".3rem",
  textAlign: "center",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: ".5rem",
  _hover: { bg: "#EFF8FF" },
};

export const endpoints = [
  {
    name: "Home",
    icon: House,
    href: "",
  },
  {
    name: "Courses",
    icon: NotebookIcon,
    href: "/courses",
  },
  { name: "Profile", icon: User, href: "/profile" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const Navbar = ({ user, studentId }: { user: TUser; studentId: string }) => {
  const [minWidth600] = useMediaQuery("(min-width: 600px)");
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      p="4"
      bg="#fff"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
    >
      <Box>
        <Button
          colorScheme="gray"
          onClick={onOpen}
          size={"sm"}
          display={{ sm: "none" }}
        >
          <MenuIcon size={18} />
        </Button>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Learnopia</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" rowGap="5" mt={5}>
                {endpoints.map((link, idx) => {
                  const IconComponent = link.icon;
                  return (
                    <NextLink
                      href={`/admin/students/${studentId}/${link.href}`}
                      key={idx}
                      onClick={onClose}
                    >
                      <Box
                        p={2}
                        display={"flex"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        columnGap={4}
                        _hover={{ textDecoration: "none" }}
                      >
                        <Box as={IconComponent} color="#044F63" size={20} />
                        <Text>{link.name}</Text>
                      </Box>
                    </NextLink>
                  );
                })}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Text display={{ base: "none", sm: "flex" }} color={"#044F63"}>
          Welcome Back{" "}
          <FaHandsClapping color="orange" style={{ marginLeft: ".5rem" }} />{" "}
        </Text>
      </Box>
      <Flex align="center">
        <Menu>
          <MenuButton
            as={Button}
            sx={button}
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
          >
            <Box sx={profile}>
              <Image
                src={user.avatar ?? "/avatar.svg"}
                width={30}
                height={30}
                style={{ borderRadius: "2px" }}
                alt=""
              />{" "}
              {minWidth600 && <Text>{user.firstName}</Text>}
            </Box>
          </MenuButton>
          <MenuList
            style={{
              padding: "0",
            }}
          >
            <MenuItem
              style={{
                padding: "0",
              }}
            >
              <Text
                onClick={() =>
                  router.push("/admin-dashboard/accounts/students")
                }
                textAlign={"center"}
                sx={link}
                fontSize={{ base: "xs", sm: "sm" }}
              >
                <TbLogout2 />
                Logout
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
