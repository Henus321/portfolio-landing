import React from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeSwitcherContainer } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  return (
    <ThemeSwitcherContainer>
      <span>Светлая тема</span>
      <FaMoon />
      <input type="radio"></input>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
