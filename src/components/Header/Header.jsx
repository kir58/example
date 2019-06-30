import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllAmount } from '../../utils';
import styles from './Header.css';
import Logo from '../../assets/logo.png';
import Basket from '../../assets/basket.png';

const mapStateToProps = state => ({
  basket: state.basket,
});

const Header = ({ basket }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/">
          <img className={styles.picture} src={Logo} alt="no img" />
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/catalog" className={styles.link} activeClassName={styles.active}>Каталог</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/basket" className={styles.link} activeClassName={styles.active}>
          <img className={styles.picture} src={Basket} alt="no img" />
          <div className={styles.amount}>{getAllAmount(basket)}</div>
        </NavLink>
      </li>
    </ul>
  </div>
);

Header.propTypes = {
  basket: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(Header);
