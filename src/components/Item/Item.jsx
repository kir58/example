import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import styles from './Item.css';
import * as actions from '../../actions';

const actionCreators = {
  addGood: actions.addGood,
};

const mapStateToProps = state => ({
  basket: state.basket,
});
const Item = ({ basket, addGood, match }) => {
  const [item, setItem] = useState({});
  const [fetchingState, setFetchingState] = useState('none');

  const getItem = async () => {
    setFetchingState('requested');
    const { params: { id } } = match;
    try {
      const response = await axios.get(`http://webmastered.ru/app/json-server/index.php?id=${id}`);
      setItem(response.data);
      setFetchingState('finished');
    } catch (e) {
      setFetchingState('failed');
    }
  };
  useEffect(() => {
    getItem();
  }, []);
  const handleAddGoodToBasket = () => {
    const updateItem = { amount: 1, ...item };
    addGood({ item: updateItem });
  };
  const {
    name,
    img,
    price,
    description,
    id,
  } = item;

  if (fetchingState === 'requested') {
    return <Loader />;
  }
  if (fetchingState === 'failed') {
    return <div>Reload the page please</div>;
  }
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div>
          <img className={styles.img} src={img} alt="no img" />
        </div>
        <div className={styles.information}>
          <div className={styles.element}>{name}</div>
          <div className={styles.element}>{`${price} RUB`}</div>
          <div className={styles.element}>{description}</div>
          {basket.some(g => g.id === id)
            ? <NavLink to="/basket" className={`${styles.add} ${styles.gotobasket}`}>Перейти в корзину</NavLink>
            : <button type="button" className={styles.add} onClick={handleAddGoodToBasket}>Добавить в корзину</button>}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
Item.propTypes = {
  basket: PropTypes.array.isRequired,
  addGood: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, actionCreators)(Item);
