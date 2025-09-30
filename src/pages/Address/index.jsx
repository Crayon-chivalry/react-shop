import { useNavigate } from "react-router-dom";

import { Checkbox, Button, Dialog } from "antd-mobile";
import { EditSOutline, DeleteOutline } from "antd-mobile-icons";

import styles from "./index.module.scss";
import AppNavBar from "@/components/AppNavBar";

const Address = () => {
  const navigate = useNavigate()

  // 添加/编辑 点击
  const handleEditClick = (id) => {
    if(id) {
      navigate("/AddressEdit?id=" + id)
    } else {
      navigate("/AddressEdit")
    }
  }

  // 删除
  const handleDelete = () => {
    Dialog.confirm({
      content: '确定要删除吗？',
      onConfirm: () => {
        console.log('删除')
      }
    })
  }

  return (
    <>
      <AppNavBar title="地址管理" />

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
              <div className={styles["btn"]} onClick={() => handleEditClick(1)}>
                <EditSOutline />
                <span>编辑</span>
              </div>
              <div className={styles["btn"]} onClick={() => handleDelete(1)}>
                <DeleteOutline />
                <span>删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer"]}>
        <Button block color="primary" shape="rounded" onClick={() => handleEditClick()}>
          添加地址
        </Button>
      </div>
    </>
  );
};

export default Address;
