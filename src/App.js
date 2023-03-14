import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./constants";
import { Context } from "./context/Context";

import GlobalStyles from "./styles/Global";
import AppLayout from "./components/AppLayout/AppLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  const { isDarkTheme } = useContext(Context);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppLayout />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default App;
