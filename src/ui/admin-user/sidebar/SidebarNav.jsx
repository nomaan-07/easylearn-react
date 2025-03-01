import SidebarNavItem from "./SidebarNavItem";

import { adminMenu, userMenu } from "../../../constants/sidebarMenus";
import { useAdminPageCheck } from "../../../hooks/useAdminPageCheck";

function SidebarNav() {
  const isAdminPage = useAdminPageCheck();
  const menu = isAdminPage ? adminMenu : userMenu;

  return (
    <ul className="mt-8 grow space-y-2">
      {menu.map((item) => (
        <SidebarNavItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default SidebarNav;
