import React from 'react';
import styles from './Home.css';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';

const images = [
  'http://www.guidebook.by/image/1538129107_600.jpg',
  'http://proguitarworld.ru/wp-content/uploads/2017/09/guitar-shop.jpg',
  'https://i7.photo.2gis.com/images/branch/16/2251799835033407_504b.jpg',
  'https://i7.photo.2gis.com/images/branch/40/5629499537599847_52e7.jpg',
  'https://i7.photo.2gis.com/images/branch/107/15058911262255178_f73e.jpg',
];

export default () => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <Slider images={images} />
    </div>
    <Footer />
  </React.Fragment>
);
