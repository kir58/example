/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Basket.css';
import * as actions from '../../actions';
import { getStr, getSum } from '../../utils';
import Footer from '../Footer/Footer';

const mapStateToProps = state => ({
  basket: state.basket,
});

const actionCreators = {
  removeGood: actions.removeGood,
  changeAmount: actions.changeAmount,
};

const Basket = ({ basket, removeGood, changeAmount }) => {
  const handleRemoveGood = id => () => {
    removeGood({ id });
  };

  const handleChangeAmount = (id, symbol) => () => {
    changeAmount({ id, symbol });
  };
  const renderGoods = () => (
    <ul className={styles.goods}>
      {basket.map(({
        id, name, amount, price, img,
      }) => (
        <li key={id} className={styles.good}>
          <div className={styles.good_item}>
            <img className={styles.img} src={img} alt="no img" />
            <div className={styles.information}>
              <Link to={`/catalog/${id}`} key={id} className={styles.link}>{name}</Link>
              <button type="button" className={styles.remove} onClick={handleRemoveGood(id)}>удалить товар</button>
            </div>
          </div>
          <div className={styles.amount}>
            <button
              type="button"
              className={styles.amount_btn}
              onClick={handleChangeAmount(id, -1)}
              disabled={amount === 1}
              id={`minus${id}`}
            />
            <label htmlFor={`minus${id}`}>-</label>
            <input className={styles.number} type="text" value={amount} onChange={() => {}} />
            <button
              type="button"
              className={styles.amount_btn}
              onClick={handleChangeAmount(id, 1)}
              id={`plus${id}`}
            />
            <label htmlFor={`plus${id}`}>+</label>
          </div>
          <div className={styles.price}>{`${price} RUB`}</div>
        </li>
      ))}
    </ul>
  );
  if (basket.length === 0) {
    return (
      <div className={styles.wrapper}>
        Ваша корзина пуста. Вы можете выбрать товар здесь:
        <Link className={styles.link} to="/catalog"> Каталог</Link>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <ul className={styles.caption}>
        <li className={styles.caption_good}>Товар</li>
        <li className={styles.caption_amount}>Кол-во</li>
        <li className={styles.caption_price}>Цена</li>
      </ul>
      {renderGoods()}
      <div className={styles.sum}>{`Сумма: ${getStr(getSum(basket))} RUB`}</div>
      <Footer />
    </div>
  );
};
Basket.propTypes = {
  basket: PropTypes.array.isRequired,
  removeGood: PropTypes.func.isRequired,
  changeAmount: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, actionCreators)(Basket);
