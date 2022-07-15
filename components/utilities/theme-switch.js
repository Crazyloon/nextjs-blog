import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import AchievementContext from "../achievements/achievement-context";

const ThemeSwitch = ({ display }) => {
  const { achievementsManager } = useContext(AchievementContext);

  const [darkTheme, setDarkTheme] = useState(false);
  const handleThemeToggle = (e) => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme !== undefined && darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <li
      onClick={() => {
        handleThemeToggle();
        achievementsManager.advanceProgress("redecorate", "toggle");
      }}
      className={`text-xl hover:bg-secondary-hover cursor-pointer transition-colors m-0 ${
        display ? "flex" : "hidden lg:block"
      }`}
    >
      <div className="h-9 flex px-3 py-1 items-center">
        <FontAwesomeIcon
          icon={faLightbulb}
          color={darkTheme ? "gray" : "gold"}
          className="w-5 h-5"
        />
        <span
          className={`ml-3 mr-1 text-link-text font-bold ${
            display ? "inline-block" : "hidden"
          }`}
        >
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </li>
  );
};

export default ThemeSwitch;
