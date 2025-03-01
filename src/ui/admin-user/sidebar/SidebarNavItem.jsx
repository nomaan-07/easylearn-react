import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "../../../hooks/useTranslation";

function SidebarNavItem({ item }) {
  const translate = useTranslation();

  const Icon = item.icon.type;
  const title = translate(`sidebarNav.${item.title}`);

  return (
    <li className="sidebar-nav-item">
      <NavLink
        to={item.path}
        className="hover:bg-theme/5 hover:text-theme flex items-center gap-4 rounded-md px-6 py-3 text-xl transition-colors"
        aria-label={title}
      >
        <Icon className="size-6" />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default SidebarNavItem;
