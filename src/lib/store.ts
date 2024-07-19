import { configureStore } from "@reduxjs/toolkit";
import enrolledCoursesSlice from "./features/enrolledCourses/enrolledCoursesSlice";
import sideBarSlice from "./features/sideBar/sideBarSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      courses: enrolledCoursesSlice,
      sideBar: sideBarSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
