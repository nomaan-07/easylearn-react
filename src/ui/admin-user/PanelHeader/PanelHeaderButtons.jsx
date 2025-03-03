import { HiOutlineBell } from "react-icons/hi2";
import DarkModeToggle from "../../../features/common/DarkModeToggle";
import LanguageSwitch from "../../../features/common/LanguageSwitch";
import HeaderButton from "../../common/HeaderButton";

function PanelHeaderButtons() {
  return (
    <div className="hidden gap-4 lg:flex">
      <DarkModeToggle />
      <LanguageSwitch />
      <HeaderButton notification={true} ariaLabel="Panel Notifications">
        <HiOutlineBell className="size-6" />
      </HeaderButton>
    </div>
  );
}

export default PanelHeaderButtons;
