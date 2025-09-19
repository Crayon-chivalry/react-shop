import { Toast } from 'antd-mobile'
import copy from 'copy-to-clipboard';

export const copyText = (text) => {
  copy(text);
  Toast.show({
    content: '复制成功'
  });
};