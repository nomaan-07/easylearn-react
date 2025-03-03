import PanelHeaderButtons from "./PanelHeaderButtons";
import PanelHeaderMobileButtons from "./PanelHeaderMobileButtons";
import PanelHeaderUserInfo from "./PanelHeaderUserInfo";
import PanelSidebarOpenButton from "./PanelSidebarOpenButton";

function PanelHeader() {
  return (
    <header className="mt-6 flex items-center justify-between rounded-2xl">
      <PanelSidebarOpenButton />
      <PanelHeaderUserInfo />
      <PanelHeaderButtons />
      <PanelHeaderMobileButtons />
    </header>
  );
}

export default PanelHeader;
