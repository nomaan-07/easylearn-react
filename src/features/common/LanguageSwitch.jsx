import { HiOutlineLanguage } from "react-icons/hi2";
import HeaderButton from "../../ui/common/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../slices/languageSlice";
import { useEffect } from "react";

function LanguageSwitch() {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
  }, [language]);

  return (
    <HeaderButton
      onClick={() => dispatch(changeLanguage())}
      ariaLabel={`Change Language to ${language === "en" ? "Persian" : "English"}`}
    >
      <HiOutlineLanguage className="size-6" />
    </HeaderButton>
  );
}

export default LanguageSwitch;
