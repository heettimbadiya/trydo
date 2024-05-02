import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import "./assets/style/default.css"
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme/theme";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </>
);
