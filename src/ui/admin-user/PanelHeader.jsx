import { useLanguage } from "../../features/useLanguage";

function PanelHeader() {
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="col-start-2 row-start-1 bg-red-500">
      <button onClick={changeLanguage}>
        {language === "fa" ? "تغییر زبان" : "Change Language"}
      </button>
    </header>
  );
}

export default PanelHeader;
