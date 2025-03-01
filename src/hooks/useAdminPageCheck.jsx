import { useLocation } from "react-router-dom";

export function useAdminPageCheck() {
  const location = useLocation();
  const isAdminPage = location.pathname.includes("/admin");

  return isAdminPage;
}
