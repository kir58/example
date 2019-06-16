import React from "react";
import styles from "./Header.css";
import { NavLink } from "react-router-dom";

export default  () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" >
            <img className={styles.picture} src="https://cdn.pixabay.com/photo/2017/05/05/16/37/logo-2287665_1280.png" />
          </NavLink>
          </li>
        <li className={styles.item}>
          <NavLink to="/catalog" className={styles.link} activeClassName={styles.active}>Catalog</NavLink>
        </li>
      </ul>
    </div>
  );
}
