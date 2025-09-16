import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Cart from "@/pages/Cart";
import User from "@/pages/User";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import Goods from "@/pages/Goods";
import Order from "@/pages/Order";
import Invite from "@/pages/Invite";
import Address from "@/pages/Address";
import Search from "@/pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "goods",
    element: <Goods />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "invite",
    element: <Invite />,
  },
  {
    path: "address",
    element: <Address />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "ResetPassword",
    element: <ResetPassword />,
  },
]);

export default router;
