import { useSelector } from "react-redux";
import { translations } from "../constants/translations";

export function useTranslation(key) {
  const language = useSelector((state) => state.language.language);

  const keys = key.split(".");

  return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
}
