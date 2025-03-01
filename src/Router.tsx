import { createBrowserRouter } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./components/Coin";
import App from "./App";
import Chart from "./components/Chart";
import Price from "./components/Price";

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
        children: [
          { path: "price", element: <Price /> },
          { path: "chart", element: <Chart /> },
        ],
      },
    ],
  },
]);
