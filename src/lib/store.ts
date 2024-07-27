import { configureStore } from "@reduxjs/toolkit";
import enrolledCoursesSlice from "./features/enrolledCourses/enrolledCoursesSlice";
import sideBarSlice from "./features/sideBar/sideBarSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    courses: enrolledCoursesSlice,
    sideBar: sideBarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
