import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import languageReducer from "./slices/languageSlice";
import panelSidebarReducer from "./slices/panelSidebarSlice";
import panelHeaderButtonsReducer from "./slices/panelHeaderButtonsSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    language: languageReducer,
    panelSidebar: panelSidebarReducer,
    panelHeaderButtons: panelHeaderButtonsReducer,
    theme: themeReducer,
  },
});

export default store;
