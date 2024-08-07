"use client";
import {
  Box,
  Button,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FaHandsClapping } from "react-icons/fa6";
import HamMenu from "../dashboard/sidebar/hamMenu/HamMenu";
import { getIcon } from "../dashboard/sidebar/sideLinks/SideLink";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import styles from "./Navbar.module.css";
import { TSideBarLinks } from "../dashboard/sidebar/Sidebar";
import { openMenuClick } from "@/lib/features/sideBar/sideBarSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { TCourse } from "../../../../public/courses";
import { fetchAllCourses } from "@/actions/courses/actions";
import { addCourses } from "@/lib/features/courses/coursesSlice";

const nav = {
  bg: "#fff",
  height: { base: "5rem" },
  // borderRadius: "4px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
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

const rightNav = {
  alignItems: "center",
  marginRight: { md: 5 },
};

interface Props {
  navLinks: TSideBarLinks;
}

export type TAddress = {
  addressLine1: string;
  addressLine2: string;
  state: string;
  country: string;
};

export type TEducation = {
  degree: string;
  institution: string;
  passingYear: string;
};

export type TUser = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  qualification: string;
  role: string;
  avatar: string;
  aboutMe?: string;
  domain?: string;
  address?: string;
  services?: string[];
  languages?: string[];
  education?: TEducation[];
  enrolledCourses?: TCourse[];
};

export function getUserInfoFromLocalStorage() {
  if (typeof window === "undefined") return {} as TUser;

  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) return JSON.parse(userInfo) as TUser;
  return {} as TUser;
}

export function addUserInfoToLocalStorage(user: TUser) {
  localStorage.setItem("userInfo", JSON.stringify(user));
}

export function removeUserInfoFromLocalStorage() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("userInfo");
  localStorage.removeItem("enrolledCoursesList");
}

const Navbar = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [minWidth600] = useMediaQuery("(min-width: 600px)");
  const [maxWidth481] = useMediaQuery("(max-width: 481px)");
  const isMenuOpen = useAppSelector((state) => state.sideBar.isOpen);

  const [userInfo, setUserInfo] = useState<TUser>({} as TUser);
  useEffect(() => {
    setUserInfo((prev) => (prev = getUserInfoFromLocalStorage()));
    async function getAllCourses() {
      const response: TCourse[] = await fetchAllCourses();
      dispatch(addCourses(response));
    }
    getAllCourses();
  }, [dispatch]);

  const toast = useToast();

  const handleSignOut = async () => {
    removeUserInfoFromLocalStorage();
    router.push("/");
    setTimeout(() => {
      toast({
        title: "Logged out successfully",
        description: "Come back soon!",
        status: "success",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }, 500);
  };

  const handleClick = () => {
    dispatch(openMenuClick(!isMenuOpen));
  };

  return (
    <Flex
      sx={nav}
      position={"relative"}
      style={{ boxShadow: "0 4px 2px -2px rgba(0,0,0,.2)" }}
    >
      <Text display={{ base: "none", sm: "flex" }} color={"#044F63"}>
        Welcome Back{" "}
        <FaHandsClapping color="orange" style={{ marginLeft: ".5rem" }} />{" "}
      </Text>

      {maxWidth481 && <HamMenu isMenuOpen={isMenuOpen} />}

      <Flex sx={rightNav}>
        <Menu>
          <Flex sx={notificationContainer}>
            <IoIosNotifications
              size={25}
              color="orange"
              style={{ marginRight: ".8rem", cursor: "pointer" }}
            />
          </Flex>
          <MenuButton
            as={Button}
            sx={button}
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
          >
            <Box sx={profile}>
              <Image
                src={userInfo.avatar ?? "/avatar.svg"}
                width={30}
                height={30}
                style={{ borderRadius: "2px" }}
                alt=""
              />{" "}
              {minWidth600 && <Text>{userInfo.firstName}</Text>}
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
              onClick={() => handleSignOut()}
            >
              <Text
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
      {maxWidth481 && (
        <Box
          position={"absolute"}
          top={"121.9%"}
          zIndex={"9"}
          bg={"#ffffff"}
          padding={"1rem"}
          className={isMenuOpen ? styles.open : styles.close}
          display={"flex"}
          flexDirection={"column"}
          rowGap={".6rem"}
          boxShadow={"5px 0 3px -3px #00000030"}
        >
          {Object.keys(navLinks).map((key, idx) => (
            <List
              key={idx}
              display={"flex"}
              flexDirection={"column"}
              rowGap={2.5}
            >
              {navLinks[key].map((sideLink, idx) => (
                <ListItem key={idx}>
                  <NextLink
                    href={sideLink.link}
                    className={
                      pathname === sideLink.link
                        ? [styles.link, styles.active].join(" ")
                        : styles.link
                    }
                    onClick={handleClick}
                  >
                    <Box>{getIcon(sideLink.icon)}</Box>
                    <Box fontSize={"sm"} width={"100%"}>
                      {sideLink.name}
                    </Box>
                  </NextLink>
                </ListItem>
              ))}
            </List>
          ))}
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
