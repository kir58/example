import React from "react";
import styles from "../styles/Home.css";
import cn from "classnames";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      currentIndex: 0,
      change: false,
      nextIndex: 0,
      images: [
        "http://иванхромов.рф/upload/resize_cache/iblock/07f/800_800_1/07fa4dc230b4819596d6e2dc31d64eb3.jpg",
        "https://arsenalmusic.ru/upload/iblock/698/698d7fa9d1ca555f4b8214b26f25630d.jpg",
        "http://i8.photo.2gis.com/main/branch/36/5067077861855608/common",
        "https://igx.4sqi.net/img/general/original/20197376_e7xA4Q03Br_va4ts7rcisgWdG4_lKhLc-BTxbGZVb6s.jpg"
     ]
    };
  }
  handleChangeSlide = direction => () => {
    const {currentIndex, images } = this.state;
    const indexIncrement = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    const indexDecrement = currentIndex < 1 ? images.length - 1 : currentIndex - 1;
    const upDateIndex = direction < 0 ? indexDecrement : indexIncrement;
    this.setState({ change: true, nextIndex: upDateIndex  });
    setTimeout(() => {
      this.setState({
        change: false,
        currentIndex: upDateIndex,
      });
    }, 1000);
  }
  renderItems = () => {
    const { images, currentIndex, change, nextIndex } = this.state;
    const getClassImg = i => cn({
      [styles.images]: true,
      [styles.active]: currentIndex === i,
      [styles.prev]: change && currentIndex === i,
      [styles.next]: change && nextIndex === i,
    });
    return images.map((link, i) => (
      <div className={getClassImg(i)} key={i}>
        <img src={link} className={styles.img}/>
        </div>
    ));
  }
  renderRadios = () => {
    const { images, currentIndex } = this.state;
    return (
      <div className={styles.radios} >
        {images.map((_, i) => (
        <div className={styles.radioWraper}  key={i}>
          <input 
              className={styles.radio}
              type="radio"
              name="radios"
              id={i}
              value={i}
              checked={i == currentIndex}
              onChange={this.handleChangeRadios}
          />
          <label className={styles.radioLabel} htmlFor={i}></label>
        </div>
        ))
        }
      </div>
    );
  
  }
  handleChangeRadios = (e) => {
    const { value } = e.target;
    this.setState({ change: true, nextIndex: Number(value)  });
    setTimeout(() => {
      this.setState({
        change: false,
        currentIndex: Number(value),
      });
    }, 1000);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.slider}>
           {this.renderItems()}
          <input type="button" className={`${styles.arrow} ${styles.leftArrow}`} onClick={this.handleChangeSlide(-1)} />
          <input type="button" className={`${styles.arrow} ${styles.rightArrow}`} onClick={this.handleChangeSlide(1)} />
           {this.renderRadios()}
        </div>
      </div>
    );
  }
};
export default Home;