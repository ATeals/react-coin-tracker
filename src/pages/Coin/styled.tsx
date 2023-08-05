import { styled } from "styled-components";

export const Box = styled.div`
    border-radius: 15px;
    background-color: ${(props) => props.theme.color.boxBg};
    padding: 20px;
    margin: 20px 0;

    & > * {
        margin: 10px 0;
    }

    h1 {
        font-size: 1.5rem;
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.div`
    width: 100%;
    text-align: center;
    background-color: ${(props) => props.theme.color.boxBg};
    margin: 10px;
    border-radius: 10px;
    padding: 10px;

    a {
        display: block;
        text-decoration: none;
        color: inherit;
    }
`;
