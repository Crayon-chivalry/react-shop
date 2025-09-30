import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

import { Form, Input, Button, Toast, Dialog, Checkbox } from "antd-mobile";

// 表单验证规则
const rules = [
  [{ required: true, message: "手机号不能为空" }],
  [{ required: true, message: "密码不能为空" }],
  [{ required: true, message: "验证码不能为空" }],
];

const Login = () => {
  const navigate = useNavigate()
  const formRef = useRef(null);
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState(true); // 是否同意用户协议

  // 跳转页面
  const toPages = (url) => {
    navigate(url)
  }

  // 展示用户手册、隐私政策对话框
  const onShowagreement = (e, type) => {
    e.preventDefault(); // 阻止默认行为
    Dialog.alert({
      content: type == 1 ? "用户手册" : "隐私政策",
    });
  };

  // 数据验证失败触发（代替表单组件原本错误反馈提示）
  const onFinishFailed = (errorInfo) => {
    Toast.show({ content: errorInfo.errorFields[0].errors[0] });
  };

  // 提交
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles["page"]}>
      <div className={styles["title"]}>欢迎来到商城</div>

      <div className={styles["tabs"]}>
        <div
          className={`${styles["tabs-item"]} ${
            active === 0 && styles["tabs-active"]
          }`}
          onClick={() => setActive(0)}
        >
          密码登录
        </div>
        <div className={styles["tabs-item"]}>|</div>
        <div
          className={`${styles["tabs-item"]} ${
            active === 1 && styles["tabs-active"]
          }`}
          onClick={() => setActive(1)}
        >
          验证码登录
        </div>
      </div>

      <Form
        ref={formRef}
        layout="horizontal"
        className={styles["form"]}
        hasFeedback={false}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="userid"
          rules={rules[0]}
          className={styles["form-item"]}
        >
          <Input placeholder="请输入手机号" />
        </Form.Item>
        {active == 0 ? (
          <Form.Item
            name="password"
            rules={rules[1]}
            className={styles["form-item"]}
          >
            <Input placeholder="请输入登录密码" type="password" />
          </Form.Item>
        ) : (
          <Form.Item
            name="code"
            rules={rules[2]}
            className={styles["form-item"]}
            extra={<div className={styles["send-btn"]}>发送验证码</div>}
          >
            <Input placeholder="请输入验证码" />
          </Form.Item>
        )}
      </Form>

      <div className={styles["links"]}>
        <div onClick={() => toPages('/register')}>还没有账号？去注册</div>
        <div onClick={() => toPages('/resetPassword')}>忘记密码</div>
      </div>

      <Button
        block
        color="primary"
        className={styles["btn"]}
        onClick={() => formRef.current?.submit()}
      >
        登录
      </Button>

      <div className={styles["agreement"]}>
        <Checkbox className={styles["checkbox"]} checked={checked} onChange={(val) => setChecked(val)}>
          阅读并同意
          <span
            className={styles["link-text"]}
            onClick={(e) => onShowagreement(e, 1)}
          >
            用户手册
          </span>
          和
          <span
            className={styles["link-text"]}
            onClick={(e) => onShowagreement(e, 2)}
          >
            隐私政策
          </span>
        </Checkbox>
      </div>
    </div>
  );
};

export default Login;
