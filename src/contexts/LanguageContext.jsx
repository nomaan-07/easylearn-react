import { createContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  function changeLanguage() {
    setLanguage((lang) => (lang === "fa" ? "en" : "fa"));
  }

  const values = useMemo(() => ({ language, changeLanguage }), [language]);
  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
