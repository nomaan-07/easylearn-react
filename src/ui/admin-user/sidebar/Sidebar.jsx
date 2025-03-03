import Logo from "../../common/logo/Logo";
import Logout from "./Logout";
import SidebarNav from "./SidebarNav";
import SidebarUserDetails from "./SidebarUserDetails";

function Sidebar() {
  return (
    <aside className="navigation fixed top-4 bottom-4 flex w-64 flex-col justify-between overflow-y-auto rounded-2xl bg-white p-3 capitalize ltr:left-4 rtl:right-4 dark:bg-slate-800">
      <Logo type="textLogo" className="mx-auto" />
      <SidebarUserDetails />
      <SidebarNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
