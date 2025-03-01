import { translations } from "../constants/translations";
import { useLanguage } from "./useLanguage";

export function useTranslation() {
  const { language } = useLanguage();

  return (key) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
  };
}
