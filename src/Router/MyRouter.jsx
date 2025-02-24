import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Cadastro from "../pages/Cadastro";
import DetalhesCurso from "../pages/DetalhesCurso";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Cadastro /> },
      {path:'/home', element: <Home />},
      {path:'/historia', element:<History />},
      {path:'/detalhes/:id', element:<DetalhesCurso />}]
  }
]);

export default MyRouter;
