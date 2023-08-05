import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color : ${(props) => props.theme.color.background};
        color : ${(props) => props.theme.text};
    }
`;

function Layout() {
    return (
        <>
            <GlobalStyle />
            <h1>hello</h1>
            <Outlet />
        </>
    );
}

export default Layout;
