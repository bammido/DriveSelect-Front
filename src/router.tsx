import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Estimate from "./pages/estimate";
import Options from "./pages/options";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Estimate />
            },
            {
                path: '/options',
                element: <Options />
            }
        ]
    }
]);