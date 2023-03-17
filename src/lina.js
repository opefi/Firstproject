/** @format */
import Nav from "./Nav";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
import paysage from "./paysage.jpg";
import NoTransitionExample from "./carrousel.js";
import { Carousel } from "react-carousel-minimal";

function Lina() {
	const data = [
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_14_dtg4nh.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_9_aohmyn.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_6_zphhyh.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_8_bl2hko.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_7_wtmghf.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_5_bwjuby.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_4_sg0xq1.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_3_uvmo1u.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_1_kw0yqq.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_2_e6gi1g.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_3_uvmo1u.jpg",
		},
	];

	const captionStyle = {
		fontSize: "2em",
		fontWeight: "bold",
	};
	const slideNumberStyle = {
		fontSize: "20px",
		fontWeight: "bold",
	};
	return (
		<div className="ome">
			<Nav />

			<div style={{ textAlign: "center" }}>
				<h2>Lina</h2>

				<div
					style={{
						padding: "0 20px",
					}}>
					<Carousel
						data={data}
						time={6000}
						width="850px"
						height="500px"
						captionStyle={captionStyle}
						radius="10px"
						slideNumber={true}
						slideNumberStyle={slideNumberStyle}
						captionPosition="bottom"
						automatic={true}
						dots={true}
						pauseIconColor="white"
						pauseIconSize="40px"
						slideBackgroundColor="darkgrey"
						slideImageFit="cover"
						thumbnails={true}
						thumbnailWidth="100px"
						style={{
							textAlign: "center",
							maxWidth: "850px",
							maxHeight: "500px",
							margin: "40px auto",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Lina;
