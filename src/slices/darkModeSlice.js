import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: localStorage.getItem("darkMode") ? "dark" : "",
  },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = state.darkMode === "dark" ? "" : "dark";
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
