import PanelHeaderButtons from "./PanelHeaderButtons";
import PanelHeaderUserInfo from "./PanelHeaderUserInfo";

function PanelHeader() {
  return (
    <header>
      <div className="mt-6 flex items-center justify-between rounded-2xl">
        <PanelHeaderUserInfo />
        <PanelHeaderButtons />
      </div>
    </header>
  );
}

export default PanelHeader;
