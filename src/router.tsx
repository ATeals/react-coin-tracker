import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Coin from "./pages/Coin";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <h1>coins</h1>,
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
