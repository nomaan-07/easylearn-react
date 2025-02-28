import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import PanelHeader from "./PanelHeader";
import PanelMain from "./PanelMain";

function PanelLayout() {
  return (
    <div className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <PanelHeader />
      <PanelMain>
        <Outlet />
      </PanelMain>
    </div>
  );
}

export default PanelLayout;
