import { useEffect } from "react";
import styles from "./index.module.scss";

import { SearchBar } from "antd-mobile";
import { DeleteOutline, CloseOutline } from "antd-mobile-icons";

import AppNavBar from "@/components/AppNavBar";
import { useState } from "react";

const Search = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [searchList, setSearchList] = useState(
    JSON.parse(localStorage.getItem("searchList")) || []
  );

  useEffect(() => {
    localStorage.setItem("searchList", JSON.stringify(searchList));
  }, [searchList]);

  // 搜索
  const onSearch = (value) => {
    const has = searchList.find((item) => item === value);
    if (has) {
      setSearchList([value, ...searchList.filter((item) => item !== value)]);
    } else {
      setSearchList([value, ...searchList]);
    }
  };
  
  // 点击搜索记录
  const handClick = (value) => {
    if(isDelete) {
      onDeleteItem(value)
    } else {
      onSearch(value)
      console.log("搜索", value)
    }
  }

  // 删除单个
  const onDeleteItem = (value) => {
    setSearchList(searchList.filter((item) => item !== value));
  }

  // 清空
  const onClear = () => {
    setSearchList([]);
    setIsDelete(false);
  }

  return (
    <div className={styles["page"]}>
      <AppNavBar title="搜索" />

      <div className={styles["search"]}>
        <SearchBar placeholder="请输入内容" onSearch={onSearch} />
      </div>

      <div className={styles["record"]}>
        <div className={styles["record-header"]}>
          <div>最近搜索</div>
          {isDelete ? (
            <div className={styles["record-header-right"]}>
              <div onClick={onClear}>全部删除</div>
              <div>|</div>
              <div onClick={() => setIsDelete(false)}>完成</div>
            </div>
          ) : (
            <DeleteOutline onClick={() => setIsDelete(true)} />
          )}
        </div>

        <div className={styles["record-list"]}>
          {searchList.map((item, index) => (
            <div className={styles["record-item"]} key={index} onClick={() => handClick(item)}>
              <span>{item}</span>
              {isDelete && <CloseOutline color="gray" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
