"use client";
import Link from "next/link";
import React from "react";
import { NavLinkType } from "../../../../../../public/sidebarLinks";
import { usePathname } from "next/navigation";
import styles from "./SideLink.module.css";
import { Box } from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import {
  BookOpenCheck,
  Edit,
  Home,
  LayoutDashboardIcon,
  Loader,
  MessagesSquareIcon,
  NotebookText,
  SettingsIcon,
  Trophy,
  User,
  Users,
  VideoIcon,
} from "lucide-react";

interface Props {
  sideLink: NavLinkType;
  isOpen: boolean;
}

export const getIcon = (iconName: string): JSX.Element | null => {
  switch (iconName) {
    case "home":
      return <Home size={18} />;
    case "dashboard":
      return <LayoutDashboardIcon size={18} />;
    case "courses":
      return <NotebookText size={18} />;
    case "exams":
      return <BookOpenCheck size={18} />;
    case "myCourses":
      return <VideoIcon size={18} />;
    case "card":
      return <FaRegCreditCard />;
    case "progress":
      return <Loader size={18} />;
    case "profile":
      return <Edit size={18} />;
    case "completed":
      return <Trophy size={18} />;
    case "settings":
      return <SettingsIcon size={18} />;
    case "person":
      return <User size={18} />;
    case "multiPersons":
      return <Users size={18} />;
    case "message":
      return <MessagesSquareIcon size={18} />;
    case "invoice":
      return <FaFileInvoiceDollar />;
    default:
      return null;
  }
};

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

const SideLink = ({ sideLink, isOpen }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={sideLink.link}
      className={
        pathname === sideLink.link
          ? [styles.link, styles.active].join(" ")
          : styles.link
      }
    >
      <Box>{getIcon(sideLink.icon)}</Box>
      {<Box sx={isOpen ? open : close}>{sideLink.name}</Box>}
    </Link>
  );
};

export default SideLink;
