import React from "react";
import styles from "./Footer.css";
import { NavLink } from "react-router-dom";

export default  () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.information}>
        ©2019, «Gitarkaforyou». Все цены указаны в рублях — Р. Наличие товара и цены на негоуточняйте у наших менеджеров.
      </div>
    </div>
  );
}