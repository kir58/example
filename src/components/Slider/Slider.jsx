import React from "react";
import styles from "./Slider.css";
import cn from "classnames";
import { debounce }from "lodash";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = null;
    this.state = {  
      currentIndex: 0,
      change: false,
      autoplay: true,
      nextIndex: 0,
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      if (this.state.autoplay) {
        this.handleChangeSlide(1)();
      }
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  handleChangeSlide = direction => () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const indexIncrement = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    const indexDecrement = currentIndex < 1 ? images.length - 1 : currentIndex - 1;
    const upDateIndex = direction < 0 ? indexDecrement : indexIncrement;
    this.setState({ change: true, nextIndex: upDateIndex  });
    setTimeout(() => {
      this.setState({
        change: false,
        currentIndex: upDateIndex,
      });
    }, 500);
  }
  renderItems = () => {
    const { currentIndex, change, nextIndex } = this.state;
    const { images } = this.props;
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
  
  handleChangeRadios = e => {
    const { value } = e.target;
    this.setState({ change: true, nextIndex: Number(value)  });
    setTimeout(() => {
      this.setState({
        change: false,
        currentIndex: Number(value),
      });
    }, 500);
  }

  renderRadios = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
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

  pause = () => {
    this.setState({ autoplay: false });
  }

  resume = () => {
    this.setState({ autoplay: true });
  }
  render() {
    return (
      <div className={styles.slider} onMouseEnter={this.pause} onMouseLeave={this.resume}>
          {this.renderItems()}
        <button 
          className={`${styles.arrow} ${styles.leftArrow}`} 
          onClick={debounce(this.handleChangeSlide(-1), 500)}
        />
        <button 
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={debounce(this.handleChangeSlide(1), 500)} 
        />
          {this.renderRadios()}
      </div>
    );
  }
};
export default Home;