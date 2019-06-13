import React, { Component } from "react";
import Header from "./Header";
import Catalog from "./Catalog";
import Item from "./Item";
import  styles from '../styles/App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Router>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/catalog" exact component={Catalog} />
					<Route path="/catalog/:id" component={Item}/>
				</Router>
			</div>
		);
	}
}

export default App;