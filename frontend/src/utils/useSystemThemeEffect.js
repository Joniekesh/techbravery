import { useEffect } from "react";
import { useSelector } from "react-redux";

const useSystemThemeEffect = () => {
  const theme = useSelector((state) => state.theme.theme);

  const resolveSystemTheme = () => {
    window.matchMedia("(prefers-color-scheme':dark)").matches
      ? "dark"
      : "light";
  };

  useEffect(() => {
    const applyTheme = (mode) => {
      const actualTheme = mode === "system" ? resolveSystemTheme() : mode;
      document.documentElement.setAttribute("data-theme", actualTheme);
    };

    applyTheme(theme);

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme':dark)");
      const listener = () => applyTheme("system");
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [theme]);
};

export default useSystemThemeEffect;
