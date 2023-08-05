import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { Container } from "@/styles/Container";

import { useQuery } from "@tanstack/react-query";
import { getCoin } from "@/api/coin";
import { Box, Button, Flex } from "./styled";

const Coin = () => {
    const { coinId } = useParams();
    const { state } = useLocation();

    const { isLoading, data } = useQuery<InfoData>(["info", coinId], () => getCoin(coinId as string));

    return (
        <Container>
            <h1>{state?.name || data?.name || "loading..."}</h1>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <Flex>
                        <img
                            src={data?.logo}
                            alt="logo"
                        />
                        <Box>
                            <div>Coin ID : {data?.id}</div>
                            <div>Coin Symbol : {data?.symbol}</div>
                            <div>Listing date : {data?.first_data_at.slice(0, 10)}</div>
                        </Box>
                    </Flex>

                    <Box>
                        <h1>discription</h1>
                        <p>{data?.description}</p>
                    </Box>

                    <Flex>
                        <Button>
                            <Link
                                to={"price"}
                                replace
                            >
                                Price
                            </Link>
                        </Button>

                        <Button>
                            <Link
                                to={"chart"}
                                replace
                            >
                                Chart
                            </Link>
                        </Button>
                    </Flex>
                </>
            )}
            <Outlet />
        </Container>
    );
};

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
    logo: string;
}

export default Coin;
