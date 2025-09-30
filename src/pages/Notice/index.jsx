import { useNavigate } from "react-router-dom";

import { RightOutline } from "antd-mobile-icons";

import styles from "./index.module.scss";
import AppNavBar from "@/components/AppNavBar";

const Notice = () => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/NoticeDetails")
  }

  return (
    <>
      <AppNavBar title="消息通知" />

      <div className={styles["container"]}>
        <div className={styles["card"]} onClick={handleClick}>
          <div className={styles["card-header"]}>
            <div className={styles["card-type"]}>
              <img src="/src/assets/images/notice-type.png" className={styles["type-icon"]} />
              <div>公告</div>
            </div>
            <div className={styles["card-date"]}>2025-09-20</div>
          </div>
          <div className={styles["card-title"]}>
            促销活动来袭！简单粗暴降价，随时换购！
          </div>
          <div className={styles["card-footer"]}>
            <div>查看详情</div>
            <RightOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
