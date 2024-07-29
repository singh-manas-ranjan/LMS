import { TCourse } from "./courses";

export type TStudentsInfo = {
  [key: string]: string;
};

export type TStudent = {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  enrolledCourses: TCourse[];
};

const studentInfo: TStudentsInfo = {
  "First Name": "Manas",
  "Last Name": "Singh",
  Email: "manassingh900@gmail.com",
  Phone: "+91 7859648565",
  Address: "Koramangla, Bengaluru, KA",
};

export default studentInfo;
