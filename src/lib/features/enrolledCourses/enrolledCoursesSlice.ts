import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../../../public/courses";

export interface EnrolledCoursesState {
  enrolledCourses: Course[];
}

const initialSate: EnrolledCoursesState = {
  enrolledCourses: [],
};

const enrolledCoursesSlice = createSlice({
  name: "courses",
  initialState: initialSate,
  reducers: {
    addEnrolledCourse(state, action: PayloadAction<Course>) {
      state.enrolledCourses.push(action.payload);
    },
    removeEnrolledCourse(state, action: PayloadAction<string>) {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course.courseId !== action.payload
      );
    },
  },
});

export const { addEnrolledCourse, removeEnrolledCourse } =
  enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
