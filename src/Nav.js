/** @format */

import React from "react";
import { BrowserRouter as Router, Link, route } from "react-router-dom";
import "./App.css";
import { Menu } from "antd";
import NavDropdown from "react-bootstrap/NavDropdown";

function Nav() {
	return (
		<nav>
			<Menu
				style={{ textAlign: "center", background: "#ffe4c4" }}
				mode="horizontal"
				theme="white">
				<Menu.Item key="mail">
					<Link to="/">Acceuil</Link>
				</Menu.Item>
				{/* <ContactForm /> */}
				<Menu.Item key="test">
					<Link to="/contact">Contact</Link>
				</Menu.Item>
				<Menu.Item key="app">
					<Link to="/lina">Lina</Link>
				</Menu.Item>
				<Menu.Item key="studio">
					<Link to="/studio">Studio</Link>
				</Menu.Item>
				<Menu.Item key="vetta1">
					<Link to="/vetta1">Vetta 1</Link>
				</Menu.Item>
				<Menu.Item key="vetta2">
					<Link to="/vetta2">Vetta 2</Link>
				</Menu.Item>
				<Menu.Item key="vetta3">
					<Link to="/vetta3">Vetta 3</Link>
				</Menu.Item>
				<Menu.Item key="extremsud">
					<Link to="/extremsud">Extreme Sud</Link>
				</Menu.Item>
			</Menu>
		</nav>
	);
}

export default Nav;
