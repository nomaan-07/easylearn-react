import { translations } from "../constants/translations";
import { useLanguage } from "./useLanguage";

export function useTranslation(key) {
  const { language } = useLanguage();

  const keys = key.split(".");

  return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
}
