import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";

import Coins from "./pages/Coins";

import Coin from "./pages/Coin";
import Price from "./pages/Coin/Price";
import Chart from "./pages/Coin/Chart";

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
                    children: [
                        {
                            path: "price",
                            element: <Price />,
                        },
                        {
                            path: "chart",
                            element: <Chart />,
                        },
                    ],
                },
            ],
        },
    ],
    {
        basename: "/",
    }
);

export default router;
