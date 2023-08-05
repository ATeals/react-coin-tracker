import { styled } from "styled-components";

export const Coin = styled.li`
    background-color: ${(props) => props.theme.color.boxBg};
    display: flex;
    border-radius: 15px;

    h1 {
        font-size: 2rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        width: 100%;
        padding: 30px;
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
            width: 2.2rem;
            height: 2.2rem;
        }
    }

    &:hover {
        a {
            color: ${(props) => props.theme.color.highlight};
        }
    }
`;

export const CoinList = styled.ul`
    & > * {
        margin: 15px;
    }
`;
