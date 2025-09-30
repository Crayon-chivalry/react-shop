import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

import { BellOutline, SetOutline, RightOutline } from "antd-mobile-icons";

const User = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* 顶部/用户信息 */}
      <div className={styles["header"]}>
        <div className={styles["header-top"]}>
          <BellOutline onClick={() => handleNavigate("/notice")} />
          <SetOutline onClick={() => handleNavigate("/set")} />
        </div>
        <div className={styles["user"]}>
          <img src="/src/assets/react.svg" className={styles["user-avatar"]} />
          <div>
            <div className={styles["user-name"]}>小黑子</div>
            <div>13152526363</div>
          </div>
        </div>
      </div>

      {/* 钱包 */}
      <div className={styles["wallet"]}>
        <div className={styles["wallet-item"]}>
          <div className={styles["wallet-amount"]}>0</div>
          <div className={styles["wallet-name"]}>余额</div>
        </div>
        <div className={styles["wallet-item"]}>
          <div className={styles["wallet-amount"]}>0</div>
          <div className={styles["wallet-name"]}>积分</div>
        </div>
        <div className={styles["wallet-item"]}>
          <div className={styles["wallet-amount"]}>0</div>
          <div className={styles["wallet-name"]}>优惠券</div>
        </div>
        <div className={styles["wallet-item"]}>
          <div className={styles["wallet-amount"]}>0</div>
          <div className={styles["wallet-name"]}>卡包</div>
        </div>
      </div>

      {/* 我的订单 */}
      <div className={styles["card"]}>
        <div className={styles["card-header"]}>
          <div className={styles["card-title"]}>我的订单</div>
          <div
            className={styles["more"]}
            onClick={() => handleNavigate("/order")}
          >
            <div>查看全部</div>
            <RightOutline />
          </div>
        </div>
        <div className={styles["order"]}>
          <div className={styles["order-item"]}>
            <img
              src="/src/assets/images/order1.png"
              className={styles["order-image"]}
            />
            <div>待付款</div>
          </div>
          <div className={styles["order-item"]}>
            <img
              src="/src/assets/images/order2.png"
              className={styles["order-image"]}
            />
            <div>待发货</div>
          </div>
          <div className={styles["order-item"]}>
            <img
              src="/src/assets/images/order3.png"
              className={styles["order-image"]}
            />
            <div>待收货</div>
          </div>
          <div className={styles["order-item"]}>
            <img
              src="/src/assets/images/order4.png"
              className={styles["order-image"]}
            />
            <div>待评价</div>
          </div>
          <div className={styles["order-item"]}>
            <img
              src="/src/assets/images/order5.png"
              className={styles["order-image"]}
            />
            <div>退款/售后</div>
          </div>
        </div>
      </div>

      {/* 我的应用 */}
      <div className={styles["card"]}>
        <div className={styles["card-header"]}>
          <div className={styles["card-title"]}>我的应用</div>
        </div>
        <div className={styles["navigation"]}>
          <div
            className={styles["navigation-item"]}
            onClick={() => handleNavigate("/invite")}
          >
            <img
              src="/src/assets/images/invite.png"
              className={styles["navigation-image"]}
            />
            <div>邀请好友</div>
          </div>
          <div
            className={styles["navigation-item"]}
            onClick={() => handleNavigate("/address")}
          >
            <img
              src="/src/assets/images/address.png"
              className={styles["navigation-image"]}
            />
            <div>地址管理</div>
          </div>
          <div className={styles["navigation-item"]}>
            <img
              src="/src/assets/images/service.png"
              className={styles["navigation-image"]}
            />
            <div>客服中心</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
