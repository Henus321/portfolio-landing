import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { NavigationContainer } from "./Navigation.styled";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";

const Navigation = () => {
  const { isMenuActive, setMenuActive } = useContext(Context);

  const onChange = () => setMenuActive(!isMenuActive);

  const onMenuClose = () => setMenuActive(false);

  const onContainerClick = (e) => e.stopPropagation();

  return (
    <NavigationContainer onClick={(e) => onContainerClick(e)}>
      <input
        type="checkbox"
        id="menu"
        checked={isMenuActive}
        onChange={() => onChange()}
      />
      <label htmlFor="menu">
        Меню
        <FaCaretLeft />
        <FaCaretDown />
      </label>
      <ul>
        <li>
          <a onClick={() => onMenuClose()} href="#about">
            О себе
          </a>
        </li>
        <li>
          <a onClick={() => onMenuClose()} href="#skills">
            Навыки
          </a>
        </li>
        <li>
          <a onClick={() => onMenuClose()} href="#projects">
            Проекты
          </a>
        </li>
        <li>
          <a onClick={() => onMenuClose()} href="#contacts">
            Контакты
          </a>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
