import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCourse } from "../../../../public/courses";

export interface EnrolledCoursesState {
  enrolledCourses: TCourse[];
}

const initialState: EnrolledCoursesState = {
  enrolledCourses: [],
};

const enrolledCoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addEnrolledCourse(state, action: PayloadAction<TCourse[]>) {
      state.enrolledCourses = action.payload;
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
