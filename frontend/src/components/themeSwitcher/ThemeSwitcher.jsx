import "./themeSwitcher.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/reducers/ThemeReducer";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const handleThemeChange = (mode) => {
    dispatch(setTheme(mode));
  };

  return (
    <div className="theme-switcher">
      <div
        className={
          currentTheme === "system" ? "theme-icon active" : "theme-icon"
        }
        onClick={() => handleThemeChange("system")}
      >
        <HiMiniComputerDesktop className="icon" />
      </div>
      <div
        className={
          currentTheme === "light" ? "theme-icon active" : "theme-icon"
        }
        onClick={() => handleThemeChange("light")}
      >
        <IoSunnyOutline className="icon" />
      </div>
      <div
        className={currentTheme === "dark" ? "theme-icon active" : "theme-icon"}
        onClick={() => handleThemeChange("dark")}
      >
        <BsMoonStars className="icon" />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
