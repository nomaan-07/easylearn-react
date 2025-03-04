import { HiOutlineBell } from "react-icons/hi2";
import DarkModeToggle from "../../../features/common/DarkModeToggle";
import LanguageSwitch from "../../../features/common/LanguageSwitch";
import HeaderButton from "../../common/HeaderButton";
import ChangeTheme from "../../../features/common/ChangeTheme/ChangeTheme";

function PanelHeaderButtons() {
  return (
    <div className="hidden gap-4 lg:flex">
      <DarkModeToggle />
      <LanguageSwitch />
      <HeaderButton notification={true} ariaLabel="Panel Notifications">
        <HiOutlineBell className="size-6" />
      </HeaderButton>
      <ChangeTheme />
    </div>
  );
}

export default PanelHeaderButtons;
