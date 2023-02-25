import { ThemeProvider } from "styled-components";
import { theme } from "./constants";

import GlobalStyles from "./styles/Global";
import AppLayout from "./components/AppLayout/AppLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppLayout />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default App;
