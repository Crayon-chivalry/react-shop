import styles from "./index.module.scss";

import { Checkbox, Button } from "antd-mobile";
import { EditSOutline, DeleteOutline } from "antd-mobile-icons";

import AppNavBar from "@/components/AppNavBar";

const Address = () => {
  return (
    <>
      <AppNavBar title="我的地址" />

      <div className={styles["address"]}>
        <div className={styles["address-item"]}>
          <div className={styles["address-header"]}>
            <div>收货人：小黑子</div>
            <div>1521000000</div>
          </div>
          <div className={styles["address-details"]}>
            四川省成都市武侯区置信南街xxxx地址
          </div>
          <div className={styles["address-footer"]}>
            <Checkbox className={styles["checkbox"]} defaultChecked>
              默认地址
            </Checkbox>
            <div className={styles["btn-wrap"]}>
              <div className={styles["btn"]}>
                <EditSOutline />
                <span>编辑</span>
              </div>
              <div className={styles["btn"]}>
                <DeleteOutline />
                <span>删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer"]}>
        <Button block color="primary" shape="rounded">
          添加地址
        </Button>
      </div>
    </>
  );
};

export default Address;
