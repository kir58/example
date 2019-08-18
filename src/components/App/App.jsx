import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.css';
import Loader from '../Loader/Loader';

const Header = React.lazy(() => import('../Header/Header'));
const Catalog = React.lazy(() => import('../Catalog/Catalog'));
const Item = React.lazy(() => import('../Item/Item'));
const Home = React.lazy(() => import('../Home/Home'));
const Basket = React.lazy(() => import('../Basket/Basket'));


export default () => (
  <div className={styles.container}>
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/basket" exaxt component={Basket} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/catalog/:id" exact component={Item} />
        </Switch>
      </React.Suspense>
    </Router>
  </div>
);
