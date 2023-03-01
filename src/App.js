import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./constants";
import { ThemeSwitcherContext } from "./context/ThemeSwitcherContext";

import GlobalStyles from "./styles/Global";
import AppLayout from "./components/AppLayout/AppLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  const { isDarkTheme } = useContext(ThemeSwitcherContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppLayout />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default App;
