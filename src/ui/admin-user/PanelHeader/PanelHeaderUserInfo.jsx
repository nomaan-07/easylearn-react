import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import { getToday } from "../../../utils/helpers";

function PanelHeaderUserInfo() {
  const language = useSelector((state) => state.language.language);

  const userFirstName = useTranslation("websiteInfo.developerFirstName");
  const today = getToday(language);

  return (
    <div className="capitalize lg:space-y-1">
      <div className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl">
        <span className="rtl:font-vazir-bold ltr:font-bold">
          {useTranslation("common.hello")}
          {useTranslation("marks.comma")}
        </span>
        <span className="rtl:font-vazir-black ltr:font-black">
          {userFirstName}
        </span>
      </div>
      <span className="rtl:font-vazir-light text-xs md:text-sm lg:text-base ltr:font-light">
        {today}
      </span>
    </div>
  );
}

export default PanelHeaderUserInfo;
