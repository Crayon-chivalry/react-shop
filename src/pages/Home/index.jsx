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

const goodsList = [
  { id: 1, name: 'SK-II神仙水精华液面霜保湿紧致护肤礼盒礼物', price: 2448, cover: '/src/assets/images/goods/SK-II.jpg' },
  { id: 2, name: '心相印茶语抽纸整箱40包', price: 26.91, cover: '/src/assets/images/goods/zhijin.jpg' },
  { id: 3, name: '豆本豆唯甄原味豆奶250ml*24盒营养早餐奶多口味植物蛋白饮品整箱', price: 29.31, cover: '/src/assets/images/goods/dounai.jpg' },
  { id: 4, name: '海信空调易省电ProE370大3匹一级变频家用客厅立式柜机', price: 3569.06, cover: '/src/assets/images/goods/haixin.jpg' },
  { id: 5, name: 'OPPO一加 Ace 5 新品学生游戏性能手机第三代骁龙 8', price: 1982.7, cover: '/src/assets/images/goods/ace5.jpg' },
]

const Home = () => {
  return (
    <div className="page">
      <div className="white-bg">
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
          {appList.map((item, index) => (
            <div className="app-item" key={index}>
              <img src={item.image} className="app-image" />
              <div>{item.name}</div>
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
      </div>

      <GoodsList list={goodsList} />
    </div>
  );
};

export default Home;
