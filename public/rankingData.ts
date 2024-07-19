const studentRankings = [
  {
    name: "Dan Abrahmov",
    imageSrc: "https://bit.ly/dan-abramov",
    enrolledCourse: "MySQL Bootcamp",
    courseCompletion: 15,
  },
  {
    name: "Prosper Otemuyiwa",
    imageSrc: "https://bit.ly/prosper-baba",
    enrolledCourse: "Complete Web-Development Course",
    courseCompletion: 50,
  },
  {
    name: "Segun Adebayo",
    imageSrc: "https://bit.ly/sage-adebayo",
    enrolledCourse: "Selenium WebDriver with Java",
    courseCompletion: 75,
  },
  {
    name: "Kent Dodds",
    imageSrc: "https://bit.ly/kent-c-dodds",
    enrolledCourse: "Spring Boot Complete Tutorial",
    courseCompletion: 25,
  },
  {
    name: "Christian Nwamba",
    imageSrc: "https://bit.ly/code-beast",
    enrolledCourse: "Appium Mobile Automation",
    courseCompletion: 15,
  },
];
export default studentRankings;

export type TStudentRankings = {
  name: string;
  imageSrc: string;
  enrolledCourse: string;
  courseCompletion: number;
};
