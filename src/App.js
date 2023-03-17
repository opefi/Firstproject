/** @format */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import { provider, Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";

import Home from "./Home";
import Contact from "./contact";
import ExtremSud from "./extremsud";
import Gites from "./gites";
import Lina from "./lina";
import studio from "./studio";
import vetta1 from "./vetta1";
import vetta2 from "./vetta2";
import vetta3 from "./vetta3";

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Home} exact path="/" />
				<Route component={Gites} exact path="/gites" />
				<Route component={ExtremSud} exact path="/extremsud" />
				<Route component={Contact} exact path="/contact" />
				<Route component={Lina} exact path="/lina" />
				<Route component={studio} exact path="/studio" />
				<Route component={vetta1} exact path="/vetta1" />
				<Route component={vetta2} exact path="/vetta2" />
				<Route component={vetta3} exact path="/vetta3" />
			</Switch>
		</Router>
	);
}

export default App;
