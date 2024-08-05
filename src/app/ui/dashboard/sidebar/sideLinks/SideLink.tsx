"use client";
import Link from "next/link";
import React from "react";
import { NavLinkType } from "../../../../../../public/sidebarLinks";
import { usePathname } from "next/navigation";
import styles from "./SideLink.module.css";
import { Box } from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { MdPlayLesson } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { RiProfileFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

interface Props {
  sideLink: NavLinkType;
  isOpen: boolean;
}

export const getIcon = (iconName: string): JSX.Element | null => {
  switch (iconName) {
    case "dashboard":
      return <MdSpaceDashboard />;
    case "courses":
      return <ImBooks />;
    case "exams":
      return <PiExamFill />;
    case "myCourses":
      return <MdPlayLesson />;
    case "card":
      return <FaRegCreditCard />;
    case "progress":
      return <GiProgression />;
    case "profile":
      return <RiProfileFill />;
    case "completed":
      return <FaTrophy />;
    case "settings":
      return <IoMdSettings />;
    case "person":
      return <FaChalkboardTeacher />;
    case "multiPersons":
      return <FaUsers />;
    case "message":
      return <BiSolidMessageDetail />;
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
