import React from "react";
import styles from "./Basket.css";

export default  () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>№</li>
        <li>Описание</li>
        <li>Кол-во</li>
        <li>Цена</li>
        <li>Сумма</li>
      </ul>
    </div>
  );
}