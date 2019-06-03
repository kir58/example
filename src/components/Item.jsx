import React from "react";
import axios from 'axios';
import styles from "../styles/Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  componentDidMount() {
    this.getItem();
  }
  getItem = async () => {
    const item = await axios.get(`https://anton-sergeenkov.ru/app/json-server/index.php?id=${this.props.match.params.id}`);
    this.setState({ item: item.data })
  }
  render() {
    const { name, img, price, description } = this.state.item;
    return (
      <div className={styles.wrapper}>
        <div>
          <img className={styles.img} src={img} />
        </div>
        <div className={styles.information}>
          <div className={styles.element}>{name}</div>
          <div className={styles.element}>{price} RUB</div>
          <div className={styles.element}>{description}</div>
        </div>
      </div>
    );
  }
}
export default Item;