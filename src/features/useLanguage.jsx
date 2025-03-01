import { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside of LanguageProvider");
  return context;
}

export { useLanguage };
