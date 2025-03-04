import { createSlice } from "@reduxjs/toolkit";

const storedLanguage = localStorage.getItem("language") || "en";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: storedLanguage,
  },
  reducers: {
    changeLanguage(state) {
      state.language = state.language === "fa" ? "en" : "fa";
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
