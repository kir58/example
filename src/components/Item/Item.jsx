/* eslint-disable no-undef */
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
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {}, fetchingState: 'none' };
  }

  componentDidMount() {
    this.getItem();
  }

  getItem = async () => {
    this.setState({ fetchingState: 'requested' });
    const { match: { params: { id } } } = this.props;
    try {
      const item = await axios.get(`http://webmastered.ru/app/json-server/index.php?id=${id}`);
      this.setState({ item: item.data, fetchingState: 'finished' });
    } catch (e) {
      this.setState({ fetchingState: 'failed' });
    }
  }

  handleAddGoodToBasket = () => {
    const { addGood } = this.props;
    const { item } = this.state;
    const updateItem = { amount: 1, ...item };
    addGood({ item: updateItem });
  }

  render() {
    const { fetchingState, item } = this.state;
    const {
      name,
      img,
      price,
      description,
      id,
    } = item;
    const { basket } = this.props;

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
              : <button type="button" className={styles.add} onClick={this.handleAddGoodToBasket}>Добавить в корзину</button>}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
Item.propTypes = {
  basket: PropTypes.array.isRequired,
  addGood: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, actionCreators)(Item);
