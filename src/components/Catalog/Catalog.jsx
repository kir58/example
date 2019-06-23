import React from "react";
import "@babel/polyfill";
import styles from "./Catalog.css";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
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
    this.state = { items: [], texInput: "", fetchingState: "none" };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    this.setState({ fetchingState: "requested" });
    try {
      const items = await axios.get('https://anton-sergeenkov.ru/app/json-server/index.php');
      this.setState({ items: items.data, fetchingState: "finished" });
    } catch (e) {
      this.setState({ fetchingState: "failed" });
      console.log(e);
    }
 
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
    const { fetchingState } = this.state;
    if (fetchingState === "requested") {
      return <Loader />
    }
    if (fetchingState === "failed") {
      return <div>Reload the page please</div>
    }
    return (
      <React.Fragment>
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
       <Footer />
      </React.Fragment>
    )
  }
}
export default Catalog;