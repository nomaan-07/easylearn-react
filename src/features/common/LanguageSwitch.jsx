import { HiOutlineLanguage } from "react-icons/hi2";
import { useLanguage } from "../../hooks/useLanguage";
import HeaderButton from "../../ui/common/HeaderButton";

function LanguageSwitch() {
  const { changeLanguage } = useLanguage();

  return (
    <HeaderButton onClick={changeLanguage}>
      <HiOutlineLanguage className="size-6" />
    </HeaderButton>
  );
}

export default LanguageSwitch;
