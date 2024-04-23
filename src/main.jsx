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
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: './:productID',
        element: <ProductInfoPage />
      }
    ]
  },
  {
    path: '/cart',
    element: <CartPage />,
    children: [
      {
        path: '/cart/:productID',
        element: <ProductInfoPage />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);
