import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Cart from "@/pages/Cart";
import User from "@/pages/User";
import Goods from "@/pages/Goods";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'category',
        element: <Category />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'user',
        element: <User />
      },
    ]
  },
  {
    path: 'goods',
    element: <Goods />
  },
])

export default router