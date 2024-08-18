"use client";
import React from "react";
import { Box, Heading, List, ListItem, useMediaQuery } from "@chakra-ui/react";
import SideLink from "./sideLinks/SideLink";
import HamMenu from "./hamMenu/HamMenu";
import { NavLinkType } from "../../../../../public/sidebarLinks";
import { useAppSelector } from "@/lib/store";
export type TSideBarLinks = {
  [key: string]: NavLinkType[];
};

interface Props {
  navLinks: TSideBarLinks;
}

const logo = {
  fontSize: "xx-large",
  fontWeight: "bold",
  color: "#044F63",
};

const collapsedLogo = {
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  w: "50px",
  h: "50px",
  bg: "#EFF8FF",
};

const sideLinkContainer = {
  display: "flex",
  flexDirection: "column",
  rowGap: ".5rem",
  // padding: "1rem",
  height: "100vh",
  borderRadius: "8px",
  color: "#242424",
  bg: "white",
};

const navLinksContainer = {
  display: "grid",
  rowGap: "1rem",
  padding: "1rem",
  // mt: "10px",
  // bg: "red",
};

const sectionContainer = {
  display: "flex",
  flexDirection: "column",
  // rowGap: "1rem",
};

const list = {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
};

const listItems = {
  display: "flex",
  alignItems: "center",
  borderRadius: ".3rem",
  border: "none",
  color: "black",
};

const Sidebar = ({ navLinks }: Props) => {
  const [minWidth480] = useMediaQuery("(min-width: 481px)");
  const menuOpen = useAppSelector((state) => state.sideBar.isOpen);

  return (
    <>
      {minWidth480 && (
        <Box sx={sideLinkContainer}>
          <Box p={"1rem"}>
            <Box sx={menuOpen ? "" : collapsedLogo}>
              {menuOpen ? (
                <Heading sx={logo} display={"flex"} justifyContent={"center"}>
                  Learnopia
                </Heading>
              ) : (
                <Heading sx={logo}>L</Heading>
              )}
            </Box>
          </Box>
          <Box sx={navLinksContainer}>
            <Box
              display={"flex"}
              justifyContent={menuOpen ? "start" : "center"}
            >
              <HamMenu isMenuOpen={menuOpen} />
            </Box>
            {Object.keys(navLinks).map((key, idx) => (
              <Box key={idx} sx={sectionContainer}>
                <List sx={list}>
                  {navLinks[key].map((sideLink, idx) => (
                    <ListItem key={idx} sx={listItems}>
                      <SideLink sideLink={sideLink} isOpen={menuOpen} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
