import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import PanelHeader from "./PanelHeader/PanelHeader";
import PanelMain from "./PanelMain";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../common/Overlay";
import { closePanelSidebar } from "../../slices/panelSidebarSlice";

function PanelLayout() {
  const isSidebarOpen = useSelector((state) => state.panelSidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Sidebar />
      <div className="container space-y-8 lg:ltr:pl-74 lg:rtl:pr-74">
        <PanelHeader />
        <PanelMain>
          <Outlet />
        </PanelMain>
      </div>
      {isSidebarOpen && (
        <Overlay onClick={() => dispatch(closePanelSidebar())} />
      )}
    </>
  );
}

export default PanelLayout;
