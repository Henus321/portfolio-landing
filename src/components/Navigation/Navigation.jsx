import React from "react";
import { NavigationContainer } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <a href="#about">О себе</a>
        </li>
        <li>
          <a href="#skills">Навыки</a>
        </li>
        <li>
          <a href="#projects">Проекты</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
