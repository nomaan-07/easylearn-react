import { NavLink } from "react-router-dom";
import { useTranslation } from "../../../hooks/useTranslation";

function SidebarNavItem({ item }) {
  const Icon = item.icon.type;
  const title = useTranslation(`sidebarNav.${item.title}`);

  return (
    <li className="sidebar-nav-item">
      <NavLink
        to={item.path}
        className="hover:bg-theme/5 hover:text-theme rtl:font-vazir-medium flex items-center gap-4 rounded-md px-6 py-3 text-lg transition-colors ltr:font-medium"
        aria-label={title}
      >
        <Icon className="size-6" />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default SidebarNavItem;
