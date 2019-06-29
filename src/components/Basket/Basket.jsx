import React from "react";
import styles from "./Basket.css";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {  getStr, getSum } from "../../utils"
import Footer from "../Footer/Footer";

const mapStateToProps = state => ({
  basket: state.basket
});

const actionCreators = {
  removeGood: actions.removeGood,
  changeAmount: actions.changeAmount
};

const Basket = ({ basket, removeGood, changeAmount }) => {
  const handleRemoveGood = id => () => {
    removeGood({ id });
    localStorage.removeItem(id);
  }

  const handleChangeAmount = (id, amount, symbol) => () => {
    const item = basket.find(el => el.id === id);
    const updatedAmoumt = amount + symbol;
    const newItem = { ...item, amount: updatedAmoumt };
    changeAmount({ id, amount, symbol });
    localStorage.setItem(id, JSON.stringify(newItem));

  }

  const renderGoods = () => (
    <ul className={styles.goods}>
      {basket.map(({ id, name, amount, price, img })=> (
        <li key={id} className={styles.good}>
          <div className={styles.good_item}>
              <img className={styles.img} src={img} />
              <div className={styles.information}>
              <Link to={`/catalog/${id}`} key={id} className={styles.link}>{name}</Link>
                <button className={styles.remove} onClick={handleRemoveGood(id)}>удалить товар</button>
            </div>
          </div>
          <div className={styles.amount}>
            <button 
              className={styles.amount_btn} 
              onClick={handleChangeAmount(id, amount, -1)}
              disabled={amount === 1} 
              id={`minus${id}`}
            />
            <label htmlFor={`minus${id}`}>-</label>
            <input className={styles.number} type="text" value={amount}/>
            <button
              className={styles.amount_btn}
              onClick={handleChangeAmount(id, amount, 1)}
              id={`plus${id}`}
            />
             <label htmlFor={`plus${id}`}>+</label>
          </div>
          <div className={styles.price}>{`${price} RUB`}</div>
        </li>
      ))}
    </ul>
  )
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
}
export default connect(mapStateToProps, actionCreators)(Basket);
