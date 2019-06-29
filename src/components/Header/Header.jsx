import React from "react";
import styles from "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Basket from "../../assets/basket.png";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  basket: state.basket
});

const Header = ({ basket }) => {
  const allAmount = basket.reduce((acc, { amount }) => amount + acc , 0);
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
          <div className={styles.amount}>{allAmount}</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default connect(mapStateToProps)(Header)
