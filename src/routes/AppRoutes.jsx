import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil";

const router = createBrowserRouter([
    {
    path: '/',
    element:<Home/>,
    children: [
        { index: true, element: <Home /> },
        { path: "Perfil", element: <Perfil/> },
        { path: "Carrinho", element: <Carrinho /> },
    ],

    },
])

export default router;