import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import "./index.css";


const router = createBrowserRouter([
  {
    path: '/Home',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/Home/:id',
        element: <ProductInfoPage />
      }
    ]
  },
  {
    path: '/cart',
    element: <CartPage />
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);
