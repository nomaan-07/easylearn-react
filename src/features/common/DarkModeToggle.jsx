import { HiOutlineMoon } from "react-icons/hi2";
import HeaderButton from "../../ui/common/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../slices/darkModeSlice";
import { useEffect } from "react";

function DarkModeToggle() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode === "dark") {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("darkMode");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <HeaderButton
      onClick={() => dispatch(toggleDarkMode())}
      ariaLabel="Toggle Dark Mode"
    >
      <HiOutlineMoon className="size-6" />
    </HeaderButton>
  );
}

export default DarkModeToggle;
