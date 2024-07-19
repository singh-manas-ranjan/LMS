import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MenuOpen = {
  isOpen: boolean;
};

const initialSate: MenuOpen = {
  isOpen: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: initialSate,
  reducers: {
    openMenuClick(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },

    onMouseEnter(state) {
      state.isOpen = true;
    },

    onMouseExit(state) {
      state.isOpen = false;
    },
  },
});

export const { openMenuClick, onMouseEnter, onMouseExit } =
  sideBarSlice.actions;
export default sideBarSlice.reducer;
