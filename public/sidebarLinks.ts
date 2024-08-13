const sidebarLinks = {
  Home_Page: [
    { name: "Dashboard", icon: "dashboard", link: "/dashboard" },
    { name: "Courses", icon: "courses", link: "/dashboard/courses" },
    { name: "My Courses", icon: "myCourses", link: "/dashboard/my-courses" },
    { name: "Exams", icon: "exams", link: "/dashboard/exams" },
    { name: "My Progress", icon: "progress", link: "/dashboard/my-progress" },
    {
      name: "Completed Courses",
      icon: "completed",
      link: "/dashboard/completed-courses",
    },
  ],
  Settings: [
    { name: "Profile", icon: "profile", link: "/dashboard/profile" },
    { name: "Settings", icon: "settings", link: "/dashboard/settings" },
  ],
};

export type NavLinkType = {
  name: string;
  icon: string;
  link: string;
};

export default sidebarLinks;
