import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeSwitcherProvider } from "./context/ThemeSwitcherContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);
