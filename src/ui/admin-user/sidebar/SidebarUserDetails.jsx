import { useTranslation } from "../../../hooks/useTranslation";

function SidebarUserDetails() {
  const translate = useTranslation();
  const userFullName = translate("websiteInfo.developerName");

  return (
    <div className="mt-3 flex flex-col items-center gap-2 border-t border-t-slate-100 pt-4 dark:border-t-slate-600">
      <img
        src="/public/images/avatar-1.jpg"
        alt="admin image"
        className="size-20 rounded-full"
      />
      <span className="rtl:font-vazir-medium text-center text-sm text-slate-400 ltr:font-medium dark:text-slate-300">
        {userFullName}
      </span>
    </div>
  );
}

export default SidebarUserDetails;
