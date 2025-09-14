import { useState } from "react";
import styles from "./index.module.scss";

import { Tabs, Button } from "antd-mobile";

import AppNavBar from "@/components/AppNavBar";

const tabs = [
  { name: "全部", value: 99 },
  { name: "待付款", value: 0 },
  { name: "待发货", value: 1 },
  { name: "待收货", value: 2 },
  { name: "待评价", value: 3 },
];

const Order = () => {
  const [activeKey, setActiveKey] = useState(99);

  const onChange = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <AppNavBar title="我的订单" />

      <Tabs
        activeKey={activeKey}
        className={styles["tabs"]}
        onChange={onChange}
      >
        {tabs.map((item) => (
          <Tabs.Tab title={item.name} key={item.value}></Tabs.Tab>
        ))}
      </Tabs>

      <div className={styles["order-list"]}>
        <div className={styles["order-item"]}>
          <div className={styles["order-header"]}>
            <div className={styles["order-no"]}>订单号：20251215345400000</div>
            <div className={styles["order-status"]}>待付款</div>
          </div>
          <div className={styles["order-goods"]}>
            <div className={styles["goods-item"]}>
              <div className={styles["goods-content"]}>
                <img
                  src="/src/assets/images/goods/SK-II.jpg"
                  className={styles["goods-cover"]}
                />
                <div>
                  <div className={styles["goods-name"]}>
                    SK-II神仙水精华液面霜保湿紧致护肤礼盒礼物
                  </div>
                  <div className={styles["goods-label"]}>规格：瓶装</div>
                </div>
              </div>
              <div className={styles["goods-right"]}>
                <div>￥212.15</div>
                <div className={styles["goods-label"]}>x1</div>
              </div>
            </div>
          </div>
          <div className={styles["order-footer"]}>
            <div className={styles["order-total"]}>共1件商品 合计：¥212.15</div>
            <div className={styles["btn-wrap"]}>
              <Button color="primary" fill="outline" size="small">
                删除
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
