import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useLanguage } from "../../../hooks/useLanguage";

function Logout() {
  const { language } = useLanguage();

  return (
    <div className="pt-auto hover:bg-theme/5 hover:text-theme flex items-center gap-4 rounded-md px-7 py-3 text-xl transition-colors md:cursor-pointer">
      <div className="flex items-center justify-center rounded-full bg-sky-950 p-1 text-sky-50 dark:bg-slate-100 dark:text-sky-950">
        <HiOutlineArrowRightOnRectangle className="size-5" />
      </div>
      <button>{language === "fa" ? "خروج" : "Logout"}</button>
    </div>
  );
}

export default Logout;
