import { HiOutlineBars3 } from "react-icons/hi2";
import HeaderButton from "../../common/HeaderButton";
import PanelHeaderButtons from "./PanelHeaderButtons";
import PanelHeaderUserInfo from "./PanelHeaderUserInfo";

function PanelHeader() {
  return (
    <header className="mt-6 flex items-center justify-between rounded-2xl">
      <HeaderButton className="lg:hidden">
        <HiOutlineBars3 className="size-6" />
      </HeaderButton>
      <PanelHeaderUserInfo />
      <PanelHeaderButtons />
    </header>
  );
}

export default PanelHeader;
