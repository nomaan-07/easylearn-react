import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme") || "fuchsia";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: storedTheme,
    isPaletteOpen: false,
  },
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
      state.isPaletteOpen = false;
    },

    togglePalette(state) {
      state.isPaletteOpen = !state.isPaletteOpen;
    },
  },
});

export const { changeTheme, togglePalette } = themeSlice.actions;
export default themeSlice.reducer;
