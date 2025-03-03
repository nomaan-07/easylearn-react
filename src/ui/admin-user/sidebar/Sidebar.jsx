import { useSelector } from "react-redux";
import Logo from "../../common/logo/Logo";
import Logout from "./Logout";
import SidebarNav from "./SidebarNav";
import SidebarUserDetails from "./SidebarUserDetails";
import SidebarCloseButton from "./SidebarCloseButton";

const baseStyles =
  "navigation fixed top-4 bottom-4 flex w-64 flex-col justify-between overflow-y-auto rounded-2xl bg-white p-3 capitalize transition-all dark:bg-slate-800 z-60";

function Sidebar() {
  const isSidebar = useSelector((state) => state.panelSidebar.isOpen);

  const styles = `${baseStyles} lg:ltr:left-4 lg:rtl:right-4 ${isSidebar ? "right-4 left-4" : "ltr:-left-64 rtl:-right-64"}`;

  return (
    <aside className={styles}>
      <SidebarCloseButton />
      <Logo type="textLogo" className="mx-auto" />

      <SidebarUserDetails />
      <SidebarNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
