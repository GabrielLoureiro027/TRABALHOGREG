import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Cadastro from "../pages/Cadastro";
import DetalhesCurso from "../pages/DetalhesCurso";
import Historia from "../pages/Historia";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path:'/', element: <Home /> },
      {path:'/cadastro', element: <Cadastro />},
      {path:'/historia', element:<Historia />},
      {path:'/detalhes/:id', element:<DetalhesCurso />}]
  }
]);

export default MyRouter;
