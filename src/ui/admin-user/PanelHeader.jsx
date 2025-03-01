import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "../../hooks/useTranslation";

function PanelHeader() {
  const { changeLanguage } = useLanguage();

  const translate = useTranslation();

  return (
    <header className="col-start-2 row-start-1 bg-red-500">
      <button onClick={changeLanguage}>
        {translate("common.changeLanguage")}
      </button>
    </header>
  );
}

export default PanelHeader;
