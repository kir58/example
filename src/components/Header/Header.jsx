import React from "react";
import styles from "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Basket from "../../assets/basket.png";

export default  () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" >
            <img className={styles.picture} src={Logo} />
          </NavLink>
          </li>
        <li className={styles.item}>
          <NavLink to="/catalog" className={styles.link} activeClassName={styles.active}>Catalog</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/basket" className={styles.link} activeClassName={styles.active}>
          <img className={styles.picture} src={Basket} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
