import { createSlice } from "@reduxjs/toolkit";

const panelHeaderButtonsSlice = createSlice({
  name: "panelHeaderButtons",
  initialState: {
    isOpen: false,
  },
  reducers: {
    togglePanelHeaderButtons(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { togglePanelHeaderButtons } = panelHeaderButtonsSlice.actions;
export default panelHeaderButtonsSlice.reducer;
