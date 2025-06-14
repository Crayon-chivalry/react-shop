import "./index.css";

import { SearchBar, Swiper } from "antd-mobile";
import { ScanningOutline, BellOutline } from "antd-mobile-icons";

import GoodsList from "@/components/GoodsList"

const appList = [
  { name: "海外购", image: "/src/assets/images/home-grid1.png" },
  { name: "新人专享", image: "/src/assets/images/home-grid2.png" },
  { name: "直播", image: "/src/assets/images/home-grid3.png" },
  { name: "积分商城", image: "/src/assets/images/home-grid4.png" },
  { name: "附近门店", image: "/src/assets/images/home-grid5.png" },
];

const Home = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="header-row">
          <ScanningOutline color="#fff" />
          <SearchBar placeholder="请输入内容" className="search" />
          <BellOutline color="#fff" />
        </div>
      </div>

      <Swiper indicatorProps={{ color: "white" }} className="swiper">
        <Swiper.Item>
          <img src="/src/assets/images/home-swiper.png" className="swiper-image" />
        </Swiper.Item>
      </Swiper>

      <div className="app-list">
        {appList.map((item) => (
          <div className="app-item">
            <img src={item.image} className="app-image" />
            <div>{ item.name }</div>
          </div>
        ))}
      </div>
      
      <img src="/src/assets/images/home-banner.png" className="banner" />

      <div className="banner-grid">
        <div className="banner-grid-item">
          <img src="/src/assets/images/banner-grid-left.png" className="banner-grid-img" />
        </div>
        <div className="banner-grid-item">
          <img src="/src/assets/images/banner-grid-right1.png" className="banner-grid-img" />
          <img src="/src/assets/images/banner-grid-right2.png" className="banner-grid-img" />
        </div>
      </div>

      <GoodsList />
    </div>
  );
};

export default Home;
