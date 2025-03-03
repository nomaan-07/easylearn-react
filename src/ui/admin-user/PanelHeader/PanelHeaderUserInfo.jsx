import { useLanguage } from "../../../hooks/useLanguage";
import { useTranslation } from "../../../hooks/useTranslation";
import { getToday } from "../../../utils/helpers";

function PanelHeaderUserInfo() {
  const { language } = useLanguage();

  const userFirstName = useTranslation("websiteInfo.developerFirstName");
  const today = getToday(language);

  return (
    <div className="space-y-1 capitalize">
      <div className="flex items-center gap-2 text-2xl">
        <span className="rtl:font-vazir-bold ltr:font-bold">
          {useTranslation("common.hello")}
          {useTranslation("marks.comma")}
        </span>
        <span className="rtl:font-vazir-black ltr:font-black">
          {userFirstName}
        </span>
      </div>
      <span className="rtl:font-vazir-light ltr:font-light">{today}</span>
    </div>
  );
}

export default PanelHeaderUserInfo;
