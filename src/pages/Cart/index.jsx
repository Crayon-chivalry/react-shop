import { NavBar, Stepper, Checkbox } from "antd-mobile";
import styles from "./inedx.module.scss";

const Cart = () => {
  return (
    <>
      <div className={styles["nav-bar"]}>
        <NavBar backIcon={false} right="编辑">
          购物车
        </NavBar>
      </div>

      <div className={styles["goods"]}>
        <div className={styles["goods-item"]}>
          <Checkbox style={{ "--icon-size": "18px" }} />
          <img
            src="/src/assets/images/goods/SK-II.jpg"
            className={styles["goods-cover"]}
          />
          <div className={styles["goods-content"]}>
            <div>
              <div className={styles["goods-name"]}>
                SK-II神仙水精华液面霜保湿紧致护肤礼盒礼物
              </div>
              <div className={styles["goods-label"]}>规格：默认</div>
            </div>
            <div className={styles["goods-cell"]}>
              <div className={styles["goods-price"]}>￥264.8</div>
              <Stepper defaultValue={1} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["submit-bar"]}>
        <div className={styles["submit-left"]}>
          <Checkbox style={{ "--icon-size": "18px" }} />
          <span>全选</span>
        </div>
        <div className={styles["submit-content"]}>
          <div>
            合计：<span className={styles["submit-amount"]}>￥0.00</span>
          </div>
          <div className={styles["submit-btn"]}>结算</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
