import { RightOutline } from 'antd-mobile-icons'
import { Button } from 'antd-mobile'

import styles from "./Set.module.scss";
import AppNavBar from "@/components/AppNavBar";

const Set = () => {
  return (
    <>
      <AppNavBar title="设置" />

      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["card-cell"]}>
            <div>头像</div>
            <img src="/src/assets/react.svg" className={styles["avatar"]} />
          </div>
          <div className={styles["card-cell"]}>
            <div>昵称</div>
            <div className={styles["card-label"]}>123</div>
          </div>
          <div className={styles["card-cell"]}>
            <div>更换手机号</div>
            <RightOutline />
          </div>
          <div className={styles["card-cell"]}>
            <div>修改密码</div>
            <RightOutline />
          </div>
        </div>

        <div className={styles["card"]}>
          <div className={styles["card-cell"]}>
            <div>关于我们</div>
            <RightOutline />
          </div>
          <div className={styles["card-cell"]}>
            <div>用户协议</div>
            <RightOutline />
          </div>
          <div className={styles["card-cell"]}>
            <div>隐私协议</div>
            <RightOutline />
          </div>
        </div>

        <Button color='primary' className={styles["logout-btn"]}>
          退出登录
        </Button>
      </div>
    </>
  )
}

export default Set