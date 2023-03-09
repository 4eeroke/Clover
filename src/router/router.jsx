import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage/HomePage";
import ItemPage from "../pages/ItemPage/ItemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },

      {
        path: "/item",
        element: <ItemPage />,
      },
      
    ],
  },
]);

export default router;
