import React from "react";
import styles from "../styles/Header.css";
import { NavLink } from "react-router-dom";

export default  () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink>
          </li>
        <li className={styles.item}>
          <NavLink to="/catalog" className={styles.link} activeClassName={styles.active}>Catalog</NavLink>
        </li>
      </ul>
    </div>
  );
}