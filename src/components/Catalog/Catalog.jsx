import React, { useEffect, useState } from 'react';
import '@babel/polyfill';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Catalog.css';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';


const getFilteredList = (arr, text) => arr.filter(({ name }) => {
  const parseName = name.toLowerCase().split(' ').filter(substr => substr.indexOf(text.toLowerCase()) === 0);
  return parseName.length !== 0;
});
const Catalog = () => {
  const [fetchingState, setFetchingState] = useState('none');
  const [items, setItems] = useState([]);
  const [textInput, setTextInput] = useState('');
  const getItems = async () => {
    setFetchingState('requested');
    try {
      const response = await axios.get('http://webmastered.ru/app/json-server/index.php');
      setItems(response.data);
      setFetchingState('finished');
    } catch (e) {
      setFetchingState('failed');
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  const renderList = () => {
    const filteredItems = getFilteredList(items, textInput);
    if (filteredItems.length === 0) {
      return null;
    }
    return (
      <ul className={styles.list}>
        {filteredItems.map(({
          id, name, img, price,
        }) => (
          <li className={styles.element} key={id}>
            <Link to={`/catalog/${id}`} key={id} className={styles.link}>
              <span className={styles.name}>{name}</span>
              <img className={styles.picture} src={img} alt="no img" />
              <span className={styles.price}>
                {`${price} RUB`}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  if (fetchingState === 'requested') {
    return <Loader />;
  }
  if (fetchingState === 'failed') {
    return <div>Reload the page please</div>;
  }
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <form>
          <input
            type="text"
            className={styles.text}
            placeholder="Введите название гитары"
            value={textInput}
            onChange={handleChange}
          />
        </form>
        <div className={styles.goods}>
          {renderList()}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Catalog;
