import { styled } from "styled-components";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Coin = styled.li`
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

const CoinList = styled.ul`
    & > * {
        margin: 15px;
    }
`;

export const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    margin: 10px 20px;

    & > h1 {
        font-size: 2em;
        font-weight: 600;
    }
`;

interface CoinObject {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const Coins = () => {
    const [coins, setCoins] = useState<CoinObject[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            // const data = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
            const data: CoinObject[] = [
                {
                    id: "btc-bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    rank: 1,
                    is_new: false,
                    is_active: true,
                    type: "coin",
                },
                {
                    id: "eth-ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    rank: 2,
                    is_new: false,
                    is_active: true,
                    type: "coin",
                },
                {
                    id: "hex-hex",
                    name: "HEX",
                    symbol: "HEX",
                    rank: 3,
                    is_new: false,
                    is_active: true,
                    type: "token",
                },
            ];
            setCoins(data);
            setLoading(false);
        })();
    }, []);

    return (
        <Container>
            <h1>Coins</h1>
            <CoinList>
                {loading ? (
                    <h1>loading....</h1>
                ) : (
                    <>
                        {coins.map((coin) => (
                            <Coin key={coin.id}>
                                <Link
                                    to={`/${coin.id}`}
                                    state={coin}
                                >
                                    <img
                                        src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                        alt={`${coin.name} IMG`}
                                    />
                                    <h1>{coin.name} &rarr;</h1>
                                </Link>
                            </Coin>
                        ))}
                    </>
                )}
            </CoinList>
        </Container>
    );
};

export default Coins;
