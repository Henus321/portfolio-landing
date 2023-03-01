import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeSwitcherContainer } from "./ThemeSwitcher.styled";
import { ThemeSwitcherContext } from "../../context/ThemeSwitcherContext";

const ThemeSwitcher = () => {
  const { isDarkTheme, setDarkTheme } = useContext(ThemeSwitcherContext);

  const onChange = () => setDarkTheme(!isDarkTheme);

  return (
    <ThemeSwitcherContainer rotate={isDarkTheme ? "2deg" : "-2deg"}>
      {isDarkTheme ? (
        <>
          <span>Темная тема</span>
          <FaMoon />
        </>
      ) : (
        <>
          <span>Светлая тема</span>
          <FaSun />
        </>
      )}

      <input
        type="checkbox"
        checked={isDarkTheme}
        onChange={() => onChange()}
      />
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
