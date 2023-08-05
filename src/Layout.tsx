import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Layout() {
    return (
        <>
            <GlobalStyle />
            <Outlet />
            <ReactQueryDevtools initialIsOpen={true} />
        </>
    );
}

export default Layout;
