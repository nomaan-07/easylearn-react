import { HiOutlineBell } from "react-icons/hi2";
import DarkModeToggle from "../../../features/common/DarkModeToggle";
import LanguageSwitch from "../../../features/common/LanguageSwitch";
import HeaderButton from "../../common/HeaderButton";

function PanelHeaderButtons() {
  return (
    <div className="flex gap-4">
      <DarkModeToggle />
      <LanguageSwitch />
      <HeaderButton notification={true}>
        <HiOutlineBell className="size-6" />
      </HeaderButton>
    </div>
  );
}

export default PanelHeaderButtons;
