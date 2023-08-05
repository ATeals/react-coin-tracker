import { Link } from "react-router-dom";

import { Container } from "@/styles/Container";
import { Coin, CoinList } from "./styled";

import { useQuery } from "@tanstack/react-query";
import { getCoinAll } from "@/api/coin";

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
    // const [coins, setCoins] = useState<CoinObject[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     (async () => {
    //         const data = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
    //         setCoins(data.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);

    const { isLoading, data } = useQuery<CoinObject[]>(["allCoins"], getCoinAll);

    return (
        <Container>
            <h1>Coins</h1>
            <CoinList>
                {isLoading ? (
                    <h1>loading....</h1>
                ) : (
                    <>
                        {data?.slice(0, 100).map((coin) => (
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
