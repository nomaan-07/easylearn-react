import { createContext, useEffect, useMemo, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") ? "dark" : "",
  );

  useEffect(() => {
    if (darkMode === "dark") {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("darkMode");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => (prevMode === "dark" ? "" : "dark"));
  }

  const values = useMemo(() => ({ darkMode, toggleDarkMode }), [darkMode]);

  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeProvider };
