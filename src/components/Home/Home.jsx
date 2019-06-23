import React from "react";
import styles from "./Home.css";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

const images = [
  "http://www.guidebook.by/image/1538129107_600.jpg",
  "https://arsenalmusic.ru/upload/iblock/698/698d7fa9d1ca555f4b8214b26f25630d.jpg",
  "https://i7.photo.2gis.com/images/branch/16/2251799835033407_504b.jpg",
  "https://i7.photo.2gis.com/images/branch/40/5629499537599847_52e7.jpg",
  "https://i7.photo.2gis.com/images/branch/107/15058911262255178_f73e.jpg"
];

export default () => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <Slider images={images} />
    </div>
    <Footer />
  </React.Fragment>
);