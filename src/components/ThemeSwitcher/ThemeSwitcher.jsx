import React from "react";
import { FaMoon } from "react-icons/fa";
import { StyledThemeSwitcher } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  return (
    <StyledThemeSwitcher>
      <span>Light Mode</span>
      <FaMoon />
      <input type="radio"></input>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
