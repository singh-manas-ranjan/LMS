const adminSidebarLinks = {
  Dashboard: [
    { name: "Home", icon: "home", link: "/home" },
    { name: "Dashboard", icon: "dashboard", link: "/admin-dashboard" },
    { name: "Courses", icon: "courses", link: "/admin-dashboard/courses" },
    {
      name: "Instructors",
      icon: "person",
      link: "/admin-dashboard/instructors",
    },
    {
      name: "Students",
      icon: "multiPersons",
      link: "/admin-dashboard/students",
    },
    { name: "Messages", icon: "message", link: "/admin-dashboard/messages" },
  ],
  Settings: [
    { name: "Profile", icon: "profile", link: "/admin-dashboard/profile" },
    { name: "Settings", icon: "settings", link: "/admin-dashboard/settings" },
  ],
};

export default adminSidebarLinks;
