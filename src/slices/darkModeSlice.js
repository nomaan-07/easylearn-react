import { createSlice } from "@reduxjs/toolkit";

const darkMode = localStorage.getItem("darkMode") ? "dark" : "";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode,
  },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = state.darkMode === "dark" ? "" : "dark";
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
