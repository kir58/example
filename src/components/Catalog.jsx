import React from "react";
import "@babel/polyfill";
import styles from "../styles/Catalog.css";
import axios from 'axios';
import { Link } from "react-router-dom";


const getFilteredList = (arr, text) => {
  return arr.filter(({ name }) => {
    const parseName = name.toLowerCase().split(' ').filter(substr => substr.indexOf(text.toLowerCase()) === 0);
      return parseName.length !== 0;
    }
  );
}
class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], texInput: "" };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    const items = await axios.get('https://anton-sergeenkov.ru/app/json-server/index.php');
    this.setState({ items: items.data });
  }

  handleChange = (e) => {
    this.setState({ texInput: e.target.value });
  }

  renderList = () => {
    const { items, texInput } = this.state;
    const filteredItems = getFilteredList(items, texInput);
    if (filteredItems.length === 0) {
      return null;
    }
    return (
      <ul className={styles.list}>
        {filteredItems.map(({ id, name, img, price }) => (
          <li className={styles.element} key={id}>
            <Link to={`/catalog/${id}`} key={id} className={styles.link}>
              <span className={styles.name}>{name}</span>
              <img className={styles.picture} src={img} />
              <span className={styles.price}>{price} RUB</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  } 
  render() {
    return (
      <div className={styles.wrapper}>
        <form>
          <input 
            type="text" 
            className={styles.text} 
            placeholder="Enter the name of the guitar" 
            value={this.state.texInput}
            onChange={this.handleChange}
          />
        </form>
        <div className={styles.goods}>
          {this.renderList()}
        </div>
      </div>
    )
  }
}
export default Catalog;