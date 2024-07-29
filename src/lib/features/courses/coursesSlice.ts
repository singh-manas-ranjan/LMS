import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCourse } from "../../../../public/courses";

export interface TAllCourses {
  courses: TCourse[];
}

const initialState: TAllCourses = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourses(state, action: PayloadAction<TCourse[]>) {
      state.courses = action.payload;
    },
  },
});

export const { addCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
