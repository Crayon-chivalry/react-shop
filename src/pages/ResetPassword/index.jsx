import { useRef } from "react";
import styles from "./index.module.scss";

import { Form, Input, Button } from "antd-mobile";

import AppNavBar from "@/components/AppNavBar";

// 表单验证规则
const rules = [
  [{ required: true, message: "手机号不能为空" }],
  [{ required: true, message: "验证码不能为空" }],
  [{ required: true, message: "新密码不能为空" }],
];

const Register = () => {
  const formRef = useRef(null)

  return (
    <>
      <AppNavBar title="找回密码" />

      <div className={styles["container"]}>
        <Form ref={formRef} className={styles["form"]}>
          <Form.Item
            name="userid"
            label="手机号"
            rules={rules[0]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            name="code"
            label="验证码"
            rules={rules[1]}
            extra={<div className={styles["send-btn"]}>发送验证码</div>}
          >
            <Input placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item
            name="password"
            label="新密码"
            rules={rules[2]}
          >
            <Input placeholder="请输入新密码" type="password" />
          </Form.Item>
        </Form>

        <Button
          block
          color="primary"
          className={styles["btn"]}
          onClick={() => formRef.current?.submit()}
        >
          确认
        </Button>
      </div>
    </>
  );
};

export default Register;
