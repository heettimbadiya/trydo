import { useTheme } from "@emotion/react";
import React from "react";
import About from "./pages/about/About";

const App = () => {
  const theme = useTheme();
  return (
    <>
      <About />
    </>
  );
};

export default App;
