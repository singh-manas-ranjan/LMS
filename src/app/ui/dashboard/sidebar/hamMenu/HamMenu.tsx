import { Button, Flex } from "@chakra-ui/react";
import { IoMenu, IoClose } from "react-icons/io5";
import React from "react";
import { openMenuClick } from "@/lib/features/sideBar/sideBarSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store";

const HamMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const isOpen = useAppSelector((state) => state.sideBar.isOpen);
  const dispatch = useAppDispatch();
  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(openMenuClick(!isOpen));
  };
  return (
    <Flex height={"fit-content"} alignItems={"center"}>
      <Button
        bg={"#EFF8FF"}
        color={"#044F63"}
        _hover={{ color: "#0275d8", bg: "#e2f2f6" }}
        onClick={handleMenuClick}
        size={{ base: "sm" }}
      >
        {isMenuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
      </Button>
    </Flex>
  );
};

export default HamMenu;
