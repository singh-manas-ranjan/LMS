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
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { TbLogout2 } from "react-icons/tb";
import { FaHandsClapping } from "react-icons/fa6";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, House, NotebookIcon, User, LucideProps } from "lucide-react";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import React from "react";
import { TUser } from "../navbar/Navbar";

const profile = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: ".5rem",
  padding: ".3rem",
  color: "#044F63",
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

export interface TEndpoint {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
}

export const studentEndpoints: TEndpoint[] = [
  {
    name: "Home",
    icon: House,
    href: "/dashboard",
  },
  {
    name: "Courses",
    icon: NotebookIcon,
    href: "/courses",
  },
  { name: "Profile", icon: User, href: "/profile" },
  // { name: "Settings", icon: Settings, href: "/settings" },
];
export const instructorEndpoints: TEndpoint[] = [
  {
    name: "Home",
    icon: House,
    href: "/dashboard",
  },
  {
    name: "Courses",
    icon: NotebookIcon,
    href: "/courses",
  },
  { name: "Profile", icon: User, href: "/profile" },
  // { name: "Settings", icon: Settings, href: "/settings" },
];

const Navbar = ({ userId }: { userId: string }) => {
  const [minWidth600] = useMediaQuery("(min-width: 600px)");
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const role = pathname.includes("admin/students") ? "students" : "instructors";
  const endpoints: TEndpoint[] =
    role === "students" ? studentEndpoints : instructorEndpoints;

  const [user, setUser] = useState<TUser>({} as TUser);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://learnopia-backend.vercel.app/api/v1/admin/access/${role}/${userId}`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.body);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [role, userId]);

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      p="4"
      bg="#F0FFFF"
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
        <Drawer
          placement={"left"}
          onClose={onClose}
          isOpen={isOpen}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth="1px"
              bg="#F0FFFF"
              color={"#044F63"}
            >
              Learnopia
            </DrawerHeader>
            <DrawerBody bg={"#F0FFFF"}>
              <Flex direction="column" rowGap={5} mt={5}>
                {endpoints.map((link, idx) => {
                  const IconComponent = link.icon;
                  return (
                    <NextLink
                      href={`/admin/${role}/${userId}${link.href}`}
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
                        <Box
                          as={IconComponent}
                          size={20}
                          color={
                            pathname.includes(link.href) ? "#0275d8" : "#044F63"
                          }
                        />
                        <Text
                          color={
                            pathname.includes(link.href) ? "#0275d8" : "#044F63"
                          }
                        >
                          {link.name}
                        </Text>
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
                onClick={() => router.push(`/admin-dashboard/accounts/${role}`)}
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

export default React.memo(Navbar);
