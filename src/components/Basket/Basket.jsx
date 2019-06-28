import React from "react";
import styles from "./Basket.css";
import * as actions from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  basket: state.basket
});

const actionCreators = {
  removeGood: actions.removeGood,
  changeAmount: actions.changeAmount
};

const getNumber = str => Number(str.split(' ').join(''));

const Basket = ({ basket, removeGood, changeAmount }) => {
  const sum = basket.reduce((acc, { price, amount }) => acc + (getNumber(price) * amount), 0);

  const handleRemoveGood = id => () => {
    removeGood({ id });
    localStorage.removeItem(id);
  }

  const handleChangeAmount = (id, amount, symbol) => () => {
    const item = basket.find(el => el.id === id);
    const updatedAmoumt = amount + symbol;
    const newItem = { ...item, amount:   updatedAmoumt };
    changeAmount({ id, amount, symbol });
    localStorage.setItem(id, JSON.stringify(newItem));

  }

  const renderGoods = () => (
    <ul className={styles.goods}>
      {basket.map(good => (
        <li key={good.id} className={styles.good}>
          <div className={styles.good_item}>
              <img className={styles.img} src={good.img} />
              <div className={styles.information}>
                <div>{good.name}</div>
                <button onClick={handleRemoveGood(good.id)}>Удалить товар</button>
            </div>
          </div>
          <div className={styles.amount}>
            <button  onClick={handleChangeAmount(good.id, good.amount, -1)}>-</button>
            <input className={styles.number} type="text" value={good.amount}/>
            <button onClick={handleChangeAmount(good.id, good.amount, 1)}>+</button>
          </div>
          <div className={styles.price}>{good.price}</div>
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
      <div className={styles.sum}>{`Сумма: ${sum}`}</div>
    </div>
  );
}
export default connect(mapStateToProps, actionCreators)(Basket)