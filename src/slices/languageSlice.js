import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: localStorage.getItem("language") || "en",
  },
  reducers: {
    changeLanguage(state) {
      state.language = state.language === "fa" ? "en" : "fa";
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
