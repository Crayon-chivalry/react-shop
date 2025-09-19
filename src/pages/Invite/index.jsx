import { useRef, useState } from "react";
import styles from "./index.module.scss";

import { QRCodeSVG } from "qrcode.react";
import html2canvas from 'html2canvas';
import { Mask } from 'antd-mobile'

import { copyText } from "@/utils";
import AppNavBar from "@/components/AppNavBar";

const Invite = () => {
  const posterRef = useRef(null)
  const [qrcodeUrl, setQrcodeUrl] = useState("https://www.baidu.com")
  const [visible, setVisible] = useState(false)

  // 生成海报并下载
  const generatePoster = async () => {
    const element = posterRef.current;
    const canvas = await html2canvas(element, {
      useCORS: true, // 允许跨域图片
      allowTaint: true, // 允许图片跨域
    });
    const url = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = new Date().getTime() + 'poster.png';
    link.href = url;
    link.click();
  };

  return (
    <div className={styles["page"]}>
      <AppNavBar title="邀请好友" />

      <img
        src="/src/assets/images/invite-bg.png"
        className={styles["page-bg"]}
      />

      {/* 待完善，其他宽度不适合， 需要自适应, 暂只适合375尺寸 */}

      <div className={styles["container"]}>
        <div className={styles["reward"]}>
          <div className={styles["reward-item"]}>10元</div>
          <div className={styles["reward-item"]}>10元</div>
        </div>

        <div className={styles["btn"]} onClick={() => setVisible(true)}></div>

        <div className={styles["income"]}>
          <div className={styles["income-item"]}>0</div>
          <div className={styles["income-item"]}>0</div>
        </div>

        <div className={styles["rules"]}></div>
      </div>

      {/* 海报 */}
      <Mask visible={visible} destroyOnClose className={styles["mask"]} onMaskClick={() => setVisible(false)}>
        <div role="dialog" aria-modal="true">
          <div ref={posterRef} className={styles["poster"]}>
            <img src="/src/assets/images/invite-poster.png" className={styles["poster-bg"]} />
            <div className={styles["poster-header"]}>
              <div className={styles["poster-title"]}>我的邀请码</div>
              <div className={styles["poster-code"]}>NXSU90</div>
            </div>
            <div className={styles["poster-qr"]}>
              <QRCodeSVG value={qrcodeUrl} size={120} />
            </div>
          </div>
          <div className={styles["mask-footer"]}>
            <div className={styles["mask-btn"]} onClick={generatePoster}>保存图片</div>
            <div className={styles["mask-btn"]} onClick={() => copyText(qrcodeUrl)}>复制链接</div>
          </div>
        </div>
      </Mask>
    </div>
  );
};

export default Invite;
