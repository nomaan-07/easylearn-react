import { createSlice } from "@reduxjs/toolkit";

const panelSidebarSlice = createSlice({
  name: "panelSidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openPanelSidebar(state) {
      state.isOpen = !state.isOpen;
    },

    closePanelSidebar(state) {
      state.isOpen = false;
    },
  },
});

export const { openPanelSidebar, closePanelSidebar } =
  panelSidebarSlice.actions;
export default panelSidebarSlice.reducer;
