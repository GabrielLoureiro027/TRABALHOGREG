import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Cadastro from "../pages/Cadastro";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> },
      {path:'/cadastros', element: <Cadastro />},
      {path:'/historia', element:<History />}]
  }
]);

export default MyRouter;
