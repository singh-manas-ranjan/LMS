export type TSummary = {
  title: string;
  stats: string;
  icon: string;
};
export type TAllSummary = {
  stats: TSummary[];
};

const weekSummary: TSummary[] = [
  { title: "Courses view", stats: "1.5k", icon: "views" },
  { title: "Total learning hours", stats: "2.8k", icon: "totalHours" },
  { title: "Students enrol", stats: "58", icon: "totalStudents" },
  { title: "Tasks completed", stats: "20", icon: "tasksCompleted" },
  { title: "Tasks due", stats: "5", icon: "tasksDue" },
];

const monthSummary: TSummary[] = [
  { title: "Courses view", stats: "3.5k", icon: "views" },
  { title: "Total learning hours", stats: "14.8k", icon: "totalHours" },
  { title: "Students enrol", stats: "258", icon: "totalStudents" },
  { title: "Tasks completed", stats: "80", icon: "tasksCompleted" },
  { title: "Tasks due", stats: "12", icon: "tasksDue" },
];

const quarterSummary: TSummary[] = [
  { title: "Courses view", stats: "13k", icon: "views" },
  { title: "Total learning hours", stats: "28.8k", icon: "totalHours" },
  { title: "Students enrol", stats: "1258", icon: "totalStudents" },
  { title: "Tasks completed", stats: "120", icon: "tasksCompleted" },
  { title: "Tasks due", stats: "55", icon: "tasksDue" },
];

const yearSummary: TSummary[] = [
  { title: "Courses view", stats: "115.5k", icon: "views" },
  { title: "Total learning hours", stats: "12.8k", icon: "totalHours" },
  { title: "Students enrol", stats: "2548", icon: "totalStudents" },
  { title: "Tasks completed", stats: "320", icon: "tasksCompleted" },
  { title: "Tasks due", stats: "78", icon: "tasksDue" },
];

const allStats: TAllSummary[] = [
  { stats: weekSummary },
  { stats: monthSummary },
  { stats: quarterSummary },
  { stats: yearSummary },
];

export default allStats;
