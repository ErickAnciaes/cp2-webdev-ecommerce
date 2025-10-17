import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil";
import Layout from "../Layout";

const router = createBrowserRouter([
    {
    path: '/',
    element:<Layout/>,
    children: [
        { index: true, element: <Home /> },
        { path: "Perfil", element: <Perfil/> },
        { path: "Carrinho", element: <Carrinho /> },
    ],

    },
])

export default router;