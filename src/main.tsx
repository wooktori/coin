import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import GlobalStyle from "./GlobalStyle.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
