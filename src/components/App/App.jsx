import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import Item from '../Item/Item';
import Home from '../Home/Home';
import Basket from '../Basket/Basket';
import styles from './App.css';

export default () => (
  <div className={styles.container}>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/basket" component={Basket} />
      <Route path="/catalog" exact component={Catalog} />
      <Route path="/catalog/:id" component={Item} />
    </Router>
  </div>
);
