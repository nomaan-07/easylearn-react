import { HiOutlineBell, HiOutlineEllipsisVertical } from "react-icons/hi2";
import DarkModeToggle from "../../../features/common/DarkModeToggle";
import LanguageSwitch from "../../../features/common/LanguageSwitch";
import HeaderButton from "../../common/HeaderButton";

function PanelHeaderButtons() {
  return (
    <div>
      <HeaderButton className="lg:hidden">
        <HiOutlineEllipsisVertical className="size-6" />
      </HeaderButton>
      <div className="hidden gap-4 lg:flex">
        <DarkModeToggle />
        <LanguageSwitch />
        <HeaderButton notification={true}>
          <HiOutlineBell className="size-6" />
        </HeaderButton>
      </div>
    </div>
  );
}

export default PanelHeaderButtons;
