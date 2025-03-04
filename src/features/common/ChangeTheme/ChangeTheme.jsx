import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "../../../ui/common/HeaderButton";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { togglePalette } from "../../../slices/themeSlice";
import ThemePalette from "./ThemePalette";

function ChangeTheme() {
  const isPaletteOpen = useSelector((state) => state.theme.isPaletteOpen);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <HeaderButton
        ariaLabel={`${isPaletteOpen ? "Close" : "Open"} Color Palette`}
        onClick={() => dispatch(togglePalette())}
      >
        <HiOutlinePaintBrush
          className={`size-6 transition-all ${isPaletteOpen ? "text-theme -rotate-45" : ""}`}
        />
      </HeaderButton>

      <ThemePalette />
    </div>
  );
}

export default ChangeTheme;
