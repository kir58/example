import React from "react";
import styles from "./Footer.css";
import { NavLink } from "react-router-dom";

export default  () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.information}>
        ©2019, «GitarkaForYou». Все цены указаны в рублях — Р. Наличие товара и цены на него уточняйте у наших менеджеров.
      </div>
    </div>
  );
}