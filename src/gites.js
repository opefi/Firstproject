/** @format */
import Nav from "./Nav";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Gites() {
	return (
		<div className="extremsud">
			<Nav />
			<div>ExtremSud</div>
		</div>
	);
}
// function mapDispatchToProps(dispatch) {
//   return {
//   selectdate: function (voyagelist) {
//       dispatch({ type: 'submitlist', voyagelist })
//     },
//   };
// }

export default Gites;
