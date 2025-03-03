import { HiOutlineXMark } from "react-icons/hi2";
import HeaderButton from "../../common/HeaderButton";
import { useDispatch } from "react-redux";
import { closePanelSidebar } from "../../../slices/panelSidebarSlice";

function SidebarCloseButton() {
  const dispatch = useDispatch();

  return (
    <HeaderButton
      className="self-end lg:hidden"
      variation="main"
      onClick={() => dispatch(closePanelSidebar())}
    >
      <HiOutlineXMark className="size-6" />
    </HeaderButton>
  );
}

export default SidebarCloseButton;
