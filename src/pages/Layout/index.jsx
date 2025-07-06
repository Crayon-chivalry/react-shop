import { Outlet, useNavigate } from 'react-router-dom';
import styles from './index.module.scss'

import { TabBar } from "antd-mobile";
import {
  AppOutline,
  ShopbagOutline,
  AppstoreOutline,
  UserOutline,
} from "antd-mobile-icons";

const tabs = [
  {
    key: "/",
    title: "首页",
    icon: <AppOutline />
  },
  {
    key: "/category",
    title: "分类",
    icon: <AppstoreOutline />
  },
  {
    key: "/cart",
    title: "购物车",
    icon: <ShopbagOutline />
  },
  {
    key: "/user",
    title: "我的",
    icon: <UserOutline />
  },
]

const Layout = () => {
  const navigate = useNavigate()

  const onChange = (key) => {
    console.log(key)
    navigate(key)
  }

  return (
    <>
      <Outlet />

      <div className='placeholder'></div>
      
      <TabBar className={styles['tabs']} onChange={onChange}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </TabBar>
    </>
  );
};

export default Layout;
