import { useLocation } from "react-router-dom";
import { Container } from "../Coins";

const Coin = () => {
    const { state } = useLocation();

    return (
        <Container>
            <h1>{state?.name || "loading..."}</h1>
        </Container>
    );
};

export default Coin;
