import Logo from "../../common/logo/Logo";
import Logout from "./Logout";
import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <aside className="row-span-2 p-3 ltr:border-r ltr:border-r-sky-100 rtl:border-l rtl:border-l-sky-100 dark:border-slate-700">
      <Logo type="textLogo" className="mx-auto" />
      <SidebarNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
