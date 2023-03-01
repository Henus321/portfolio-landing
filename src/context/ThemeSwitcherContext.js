import React, { createContext, useState } from "react";

export const ThemeSwitcherContext = createContext();

export const ThemeSwitcherProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const value = { isDarkTheme, setDarkTheme };

  return (
    <ThemeSwitcherContext.Provider value={value}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
};
