import {
  HiOutlineBell,
  HiOutlineEllipsisVertical,
  HiOutlineXMark,
} from "react-icons/hi2";
import DarkModeToggle from "../../../features/common/DarkModeToggle";
import LanguageSwitch from "../../../features/common/LanguageSwitch";
import HeaderButton from "../../common/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { togglePanelHeaderButtons } from "../../../slices/panelHeaderButtonsSlice";

function PanelHeaderMobileButtons() {
  const isMenuOpen = useSelector((state) => state.panelHeaderButtons.isOpen);

  const dispatch = useDispatch();

  return (
    <div className="relative lg:hidden">
      <HeaderButton
        onClick={() => dispatch(togglePanelHeaderButtons())}
        ariaLabel={`${isMenuOpen ? "Close" : "Open"} Header Menu`}
      >
        {isMenuOpen ? (
          <HiOutlineXMark className="size-6" />
        ) : (
          <HiOutlineEllipsisVertical className="size-6" />
        )}
      </HeaderButton>
      <div
        className={`absolute space-y-2 text-xs transition-all ${isMenuOpen ? "visible top-12 opacity-100" : "invisible top-6 opacity-0"}`}
      >
        <DarkModeToggle />
        <LanguageSwitch />
        <HeaderButton notification={true} ariaLabel="Panel Notifications">
          <HiOutlineBell className="size-6" />
        </HeaderButton>
      </div>
    </div>
  );
}

export default PanelHeaderMobileButtons;
