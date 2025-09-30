import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  Form,
  Input,
  Button,
  CascadePicker,
  TextArea,
  Switch,
} from "antd-mobile";

import styles from "./AddressEdit.module.scss";
import areas from "@/assets/json/areas.json";
import AppNavBar from "@/components/AppNavBar";

const rules = [
  [{ required: true, message: "收货人不能为空" }],
  [{ required: true, message: "手机号不能为空" }],
  [{ required: true, message: "地址不能为空" }],
];

const AddressEdit = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const title = id ? "编辑地址" : "添加地址";

  const formRef = useRef(null);
  const [formArea, setFormArea] = useState("")

  // 格式化地址
  const formatAddress = (val) => {
    return val.map((item) => item.label).join("");
  };

  // 确认选择地址
  const confirmAreas = (val, extend) => {
    setFormArea(formatAddress(extend.items))
  };

  // 提交
  const handleSubmit = (values) => {
    console.log(values);
    console.log(formArea)
  };

  useEffect(() => {
    if(id) {
      formRef.current.setFieldsValue({
        name: "123",
        tel: 14152526363,
        areaCode: ['11', '1101', '110111'],
        detailsAddress: "希望小学",
        default: true
      })
    }
  }, [])

  return (
    <>
      <AppNavBar title={title} />

      <div className={styles["container"]}>
        <Form
          ref={formRef}
          className={styles["form"]}
          onFinish={handleSubmit}
        >
          <Form.Item name="name" label="收货人" rules={rules[0]}>
            <Input placeholder="请输入收货人" />
          </Form.Item>
          <Form.Item name="tel" label="手机号" rules={rules[1]}>
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="areaCode"
            label="地址"
            rules={rules[2]}
            trigger="onConfirm"
            onClick={(e, datePickerRef) => {
              datePickerRef.current?.open();
            }}
          >
            <CascadePicker title="地址" options={areas} onConfirm={confirmAreas}>
              {(value) =>
                value.length > 0 ? formatAddress(value) : "请选择地址"
              }
            </CascadePicker>
          </Form.Item>
          <Form.Item name="detailsAddress" label="详细地址">
            <TextArea
              placeholder="请输入详细地址"
              style={{ "--font-size": "14px" }}
            />
          </Form.Item>
          <Form.Item name="default" label="默认地址" valuePropName="checked">
            <Switch />
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

export default AddressEdit;
