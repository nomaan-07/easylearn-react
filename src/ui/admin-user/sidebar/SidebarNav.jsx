import { useLocation } from "react-router-dom";

import { adminMenu, userMenu } from "../../../constants/sidebarMenus";

import SidebarNavItem from "./SidebarNavItem";

function SidebarNav() {
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin");
  const menu = isAdmin ? adminMenu : userMenu;

  return (
    <ul className="row-span-4 my-24 space-y-2">
      {menu.map((item) => (
        <SidebarNavItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default SidebarNav;
