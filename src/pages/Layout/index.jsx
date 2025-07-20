import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation()
  const navigate = useNavigate()
  const activeKey = location.pathname
  
  const onChange = (key) => {
    navigate(key)
  }

  return (
    <>
      <Outlet />

      <div className={styles['placeholder']}></div>
      
      <TabBar className={styles['tabs']} activeKey={activeKey} onChange={onChange}>
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
