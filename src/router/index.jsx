import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import Goods from "@/pages/Goods";
import Order from "@/pages/Order";
import Invite from "@/pages/Invite";
import Address from "@/pages/Address";
import AddressEdit from "@/pages/Address/AddressEdit";
import Search from "@/pages/Search";
import User from "@/pages/User";
import Set from "@/pages/User/Set"
import Notice from "@/pages/Notice"
import NoticeDetails from "@/pages/Notice/NoticeDetails"

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
    path: "addressEdit",
    element: <AddressEdit />,
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
    path: "register",
    element: <Register />,
  },
  {
    path: "resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "set",
    element: <Set />,
  },
  {
    path: "notice",
    element: <Notice />,
  },
  {
    path: "noticeDetails",
    element: <NoticeDetails />,
  }
]);

export default router;
