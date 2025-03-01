import { createBrowserRouter } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./components/Coin";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Coins />,
            },
            {
                path: ":coinId",
                element: <Coin />,
            },
        ],
    },
]);
