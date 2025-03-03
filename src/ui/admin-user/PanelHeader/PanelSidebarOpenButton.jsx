import { HiOutlineBars3 } from "react-icons/hi2";
import HeaderButton from "../../common/HeaderButton";
import { useDispatch } from "react-redux";
import { openPanelSidebar } from "../../../slices/panelSidebarSlice";

function PanelSidebarOpenButton() {
  const dispatch = useDispatch();

  return (
    <HeaderButton
      className="lg:hidden"
      onClick={() => dispatch(openPanelSidebar())}
      ariaLabel="Open Sidebar"
    >
      <HiOutlineBars3 className="size-6" />
    </HeaderButton>
  );
}

export default PanelSidebarOpenButton;
