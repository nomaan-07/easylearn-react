import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useTranslation } from "../../../hooks/useTranslation";

function Logout() {
  return (
    <button
      className="hover:bg-theme/5 hover:text-theme rtl:font-vazir-medium mt-4 flex items-center gap-4 rounded-md border-t border-t-slate-100 px-7 py-3 text-lg transition-colors md:cursor-pointer ltr:font-medium dark:border-t-slate-600"
      aria-label="Logout"
    >
      <div className="flex items-center justify-center rounded-full bg-sky-950 p-1 text-sky-50 dark:bg-slate-100 dark:text-sky-950">
        <HiOutlineArrowRightOnRectangle className="size-5 rtl:rotate-180" />
      </div>
      <span>{useTranslation("common.logout")}</span>
    </button>
  );
}

export default Logout;
