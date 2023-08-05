import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Coins />,
                },
                {
                    path: "/:coinId",
                    element: <Coin />,
                },
            ],
        },
    ],
    {
        basename: "",
    }
);

export default router;
