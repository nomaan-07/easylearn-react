import Logo from "../../common/logo/Logo";
import Logout from "./Logout";
import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <aside className="navigation fixed top-0 bottom-0 row-span-2 w-64 overflow-y-auto p-3 ltr:left-0 ltr:border-r ltr:border-r-sky-100 rtl:right-0 rtl:border-l rtl:border-l-sky-100 dark:border-slate-700">
      <Logo type="textLogo" className="mx-auto" />
      <SidebarNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
