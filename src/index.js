import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";

import App from "./App";
import { theme } from "./styles/theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
