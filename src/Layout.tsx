import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color : ${(props) => props.theme.background};
        color : ${(props) => props.theme.text};
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <h1>hello</h1>
            <Outlet />
        </>
    );
}

export default App;
