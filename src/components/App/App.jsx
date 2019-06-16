import React, { Component } from "react";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import Item from "../Item/Item";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import  styles from './App.css';
import { HashRouter as Router, Route  } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Router basename={process.env.PUBLIC_URL}>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/catalog" exact component={Catalog} />
					<Route path="/catalog/:id" component={Item}/>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;