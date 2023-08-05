import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import "./styles/reset.css";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={LightTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
