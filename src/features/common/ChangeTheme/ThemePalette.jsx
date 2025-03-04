import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { changeTheme } from "../../../slices/themeSlice";
import { useEffect } from "react";

const baseStyles =
  "absolute flex w-50 flex-wrap justify-end gap-1 transition-all duration-300 sm:w-max ltr:right-0 rtl:left-0 ";

function ThemePalette() {
  const isPaletteOpen = useSelector((state) => state.theme.isPaletteOpen);
  const theme = useSelector((state) => state.theme.theme);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = `${darkMode} ${theme}`;
  }, [darkMode, theme]);

  return (
    <div
      className={`${baseStyles} ${isPaletteOpen ? "visible top-12 opacity-100" : "invisible top-10 opacity-0"}`}
    >
      {colors.map((color) => (
        <button
          className={`${color.bg} size-10 rounded-sm transition-all md:cursor-pointer md:hover:scale-103`}
          key={color.id}
          onClick={() => dispatch(changeTheme(color.name))}
          aria-label={`Change Theme to ${color.name}`}
        ></button>
      ))}
    </div>
  );
}

export default ThemePalette;
