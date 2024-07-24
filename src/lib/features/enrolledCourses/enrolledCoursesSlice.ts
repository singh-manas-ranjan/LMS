import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCourse } from "../../../../public/courses";

export interface EnrolledCoursesState {
  enrolledCourses: TCourse[];
}

const initialSate: EnrolledCoursesState = {
  enrolledCourses: [],
};

const enrolledCoursesSlice = createSlice({
  name: "courses",
  initialState: initialSate,
  reducers: {
    addEnrolledCourse(state, action: PayloadAction<TCourse | TCourse[]>) {
      if (Array.isArray(action.payload)) {
        state.enrolledCourses = [...state.enrolledCourses, ...action.payload];
      } else {
        state.enrolledCourses.push(action.payload);
      }
    },
    removeEnrolledCourse(state, action: PayloadAction<string>) {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course._id !== action.payload
      );
    },
  },
});

export const { addEnrolledCourse, removeEnrolledCourse } =
  enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
