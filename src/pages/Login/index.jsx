import { useState } from "react";
import styles from "./index.module.scss";

import { Input, Button } from "antd-mobile";

const tabs = ["验证码登录", "密码登录"];

const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [active, setActive] = useState(0);

  return (
    <div className={styles["page"]}>
      <div className={styles["title"]}>欢迎来到商城</div>

      <div className={styles["tabs"]}>
        {tabs.map((item, index) => (
          <div
            className={styles["tabs-item"]}
            key={index}
            onClick={() => setActive(index)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={styles["form"]}>
        <div className={styles["form-item"]}>
          <Input
            placeholder="请输入手机号"
            value={userid}
            onChange={(val) => setUserid(val)}
          />
        </div>
        {active == 0 ? (
          <div className={styles["form-item"]}>
            <Input
              placeholder="请输入验证码"
              value={code}
              onChange={(val) => setCode(val)}
            />
          </div>
        ) : (
          <div className={styles["form-item"]}>
            <Input
              placeholder="请输入登录密码"
              type="password"
              value={password}
              onChange={(val) => setPassword(val)}
            />
          </div>
        )}
      </div>

      <div className={styles["agreement"]}>
        我已阅读
        <span className={styles["link-text"]}>用户手册</span>和
        <span className={styles["link-text"]}>隐私政策</span>
      </div>

      <Button block color="primary" className={styles["btn"]}>
        登录
      </Button>
    </div>
  );
};

export default Login;
