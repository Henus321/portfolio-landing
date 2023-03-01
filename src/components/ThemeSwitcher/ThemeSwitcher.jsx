import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeSwitcherContainer } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ThemeSwitcherContainer>
      <span>Светлая тема</span>
      <FaMoon />
      <input type="checkbox" checked={checked} onChange={() => onChange()} />
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
