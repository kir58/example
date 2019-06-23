import React from "react";
import axios from 'axios';
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import styles from "./Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {}, fetchingState: "none" };
  }

  componentDidMount() {
    this.getItem();
  }

  getItem = async () => {
    this.setState({ fetchingState: "requested" });
    try {
      const item = await axios.get(`https://anton-sergeenkov.ru/app/json-server/index.php?id=${this.props.match.params.id}`);
      this.setState({ item: item.data, fetchingState: "finished" });
    } catch (e) {
      this.setState({ fetchingState: "failed" });
      console.log(e);
    }
  }
  render() {
    const { fetchingState, item } = this.state;
    const { name, img, price, description } = item;

    if (fetchingState === "requested") {
      return <Loader />
    }
    if (fetchingState === "failed") {
      return <div>Reload the page please</div>
    }
    return (
      <React.Fragment>
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
        <Footer />
      </React.Fragment>
    );
  }
}
export default Item;