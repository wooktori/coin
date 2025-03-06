import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, whiteTheme } from "./theme";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <ThemeProvider theme={isDark ? darkTheme : whiteTheme}>
      <GlobalStyle />
      <div>
        <Link to={"/"}>back &larr;</Link>
        <Outlet context={{ isDark, toggleTheme }} />
      </div>
    </ThemeProvider>
  );
}
