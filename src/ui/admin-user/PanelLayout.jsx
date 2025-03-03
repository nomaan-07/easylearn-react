import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import PanelHeader from "./PanelHeader/PanelHeader";
import PanelMain from "./PanelMain";

function PanelLayout() {
  return (
    <>
      <Sidebar />
      <div className="container space-y-8 lg:ltr:pl-74 lg:rtl:pr-74">
        <PanelHeader />
        <PanelMain>
          <Outlet />
        </PanelMain>
      </div>
    </>
  );
}

export default PanelLayout;
