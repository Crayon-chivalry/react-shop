import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThrottleFn } from "ahooks";
import styles from "./index.module.scss";

import { Tabs, Swiper, NavBar } from "antd-mobile";
import {
  MoreOutline,
  AppstoreOutline,
  TruckOutline,
  RightOutline,
  CheckShieldOutline,
} from "antd-mobile-icons";

const tabItems = [
  { key: "1", title: "商品" },
  { key: "2", title: "评价" },
  { key: "3", title: "详情" },
];

const tabHeight = 45;

const Goods = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("1");

  // tabs 点击事件
  const tabsChange = (key) => {
    const el = document.getElementById(`section-${key}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - tabHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // 滚动事件，设置对应的 tabs
  const { run: handleScroll } = useThrottleFn(
    () => {
      let currentKey = tabItems[0].key;
      for (const item of tabItems) {
        const element = document.getElementById(`section-${item.key}`);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= tabHeight) {
          currentKey = item.key;
        } else {
          break;
        }
      }
      setActiveKey(currentKey);
    },
    {
      wait: 100,
    }
  );

  // 返回
  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 顶部导航栏 */}
      <NavBar
        className={styles["app-nav-bar"]}
        right={<MoreOutline />}
        onBack={onBack}
      >
        <Tabs activeKey={activeKey} onChange={tabsChange}>
          {tabItems.map((item) => (
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
      </NavBar>

      {/* 轮播图 */}
      <div id="section-1">
        <Swiper indicatorProps={{ color: "white" }}>
          <Swiper.Item>
            <img
              src="/src/assets/images/goods/SK-II.jpg"
              className={styles["swiper-image"]}
            />
          </Swiper.Item>
        </Swiper>
      </div>

      {/* 商品信息 */}
      <div className={styles["goods-info"]}>
        <div className={styles["info-header"]}>
          <div className={styles["goods-price"]}>￥88</div>
          <div className={styles["goods-sales"]}>已售7万+</div>
        </div>
        <div className={styles["goods-name"]}>
          SK-II神仙水精华液面霜保湿紧致护肤礼盒礼物
        </div>
      </div>

      {/* 规格/地址/服务 */}
      <div className={styles["cell-wrap"]}>
        <div className={styles["cell"]}>
          <div className={styles["cell-left"]}>
            <AppstoreOutline />
            <div className={styles["cell-name"]}>选择</div>
          </div>
          <div className={styles["cell-content"]}>1211</div>
          <RightOutline />
        </div>
        <div className={styles["cell"]}>
          <div className={styles["cell-left"]}>
            <TruckOutline />
            <div className={styles["cell-name"]}>送至</div>
          </div>
          <div className={styles["cell-content"]}>1211</div>
          <RightOutline />
        </div>
        <div className={styles["cell"]}>
          <div className={styles["cell-left"]}>
            <CheckShieldOutline />
            <div className={styles["cell-name"]}>说明</div>
          </div>
          <div className={styles["cell-content"]}>1211</div>
          <RightOutline />
        </div>
      </div>

      {/* 评论区 */}
      <div className={styles["comment"]} id="section-2">
        <div className={styles["comment-header"]}>
          <div>宝贝评论（100）</div>
          <div className={styles["comment-more"]}>
            <span>查看全部</span>
            <RightOutline />
          </div>
        </div>
      </div>

      <div className={styles["details"]} id="section-3">
        <div className={styles["details-title"]}>商品详情</div>
        <img
          src="/src/assets/images/goods/SK-II.jpg"
          className={styles["swiper-image"]}
        />
        <img
          src="/src/assets/images/goods/SK-II.jpg"
          className={styles["swiper-image"]}
        />
        <img
          src="/src/assets/images/goods/SK-II.jpg"
          className={styles["swiper-image"]}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: detailHtml }} /> */}
      </div>
    </>
  );
};

export default Goods;
