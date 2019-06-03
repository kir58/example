import React from "react";
import styles from "../styles/Home.css";

const debounce = (f, ms) => {
  let timer = null;
  return function (...args)  {
    const onComplete = () => f.apply(this, args);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(onComplete, ms);
  };
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, autoId: null, images: [
      "http://иванхромов.рф/upload/resize_cache/iblock/07f/800_800_1/07fa4dc230b4819596d6e2dc31d64eb3.jpg",
      "https://arsenalmusic.ru/upload/iblock/698/698d7fa9d1ca555f4b8214b26f25630d.jpg",
      "http://i8.photo.2gis.com/main/branch/36/5067077861855608/common",
      "https://igx.4sqi.net/img/general/original/20197376_e7xA4Q03Br_va4ts7rcisgWdG4_lKhLc-BTxbGZVb6s.jpg"
      ]
    };
  }
   componentDidMount() {
    const autoId = setInterval(this.handleRigthArrow, 4000);
    this.setState({ autoId });
  }

  handleRigthArrow = (e) => {
    if (e) {
      clearInterval(this.state.autoId);
    };
    const index = this.state.current >= this.state.images.length - 1 ? 0 : this.state.current + 1;
    this.setState({ current: index, auto: true }); 
  }

  handleLeftArrow = (e) => {
    if (e) {
      clearInterval(this.state.autoId);
    };
    const index = this.state.current < 1 ? this.state.images.length - 1 : this.state.current - 1; 
    this.setState({ current: index });
  }
  renderItems = () => {
    const { images, current } = this.state;
    const begin = current === 0 ? images[images.length - 1] : images[current - 1];
    const end = current === images.length - 1 ? images[0] : images[current + 1];
    return [begin, images[current], end].map((link, i) => (
      <img src={link} className={`${styles.img} ${styles[`img${i}`]} `} key={link}/>
    ))

  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Welcome guys!</h1>
        <div className={styles.slider}>
          <div className={styles.images}>
            {this.renderItems()}
          </div>
          <input type="button" className={`${styles.carousel} ${styles.prev}`} onClick={debounce(this.handleLeftArrow, 300)} />
          <input type="button" className={`${styles.carousel} ${styles.next}`} onClick={debounce(this.handleRigthArrow, 300)} />
        </div>
      </div>
    );
  }
};
export default Home;
