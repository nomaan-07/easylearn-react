import { HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../../hooks/useDarkMode";
import HeaderButton from "../../ui/common/HeaderButton";

function DarkModeToggle() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <HeaderButton onClick={toggleDarkMode}>
      <HiOutlineMoon className="size-6" />
    </HeaderButton>
  );
}

export default DarkModeToggle;
