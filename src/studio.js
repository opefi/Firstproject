/** @format */
import Nav from "./Nav";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
import paysage from "./paysage.jpg";
import NoTransitionExample from "./carrousel.js";
import { Carousel } from "react-carousel-minimal";
// import { Vetta1A, Vetta2A, Vetta3A } from "./photosgite/vetta1";

// function UncontrolledExample() {
// 	return (
// 		<Carousel>
// 			<Carousel.Item>
// 				<img
// 					className="d-block w-100"
// 					src="holder.js/800x400?text=First slide&bg=373940"
// 					alt="First slide"
// 				/>
// 				<Carousel.Caption>
// 					<h3>First slide label</h3>
// 					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// 				</Carousel.Caption>
// 			</Carousel.Item>
// 			<Carousel.Item>
// 				<img
// 					className="d-block w-100"
// 					src="holder.js/800x400?text=Second slide&bg=282c34"
// 					alt="Second slide"
// 				/>

// 				<Carousel.Caption>
// 					<h3>Second slide label</h3>
// 					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// 				</Carousel.Caption>
// 			</Carousel.Item>
// 			<Carousel.Item>
// 				<img
// 					className="d-block w-100"
// 					src="holder.js/800x400?text=Third slide&bg=20232a"
// 					alt="Third slide"
// 				/>

// 				<Carousel.Caption>
// 					<h3>Third slide label</h3>
// 					<p>
// 						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// 					</p>
// 				</Carousel.Caption>
// 			</Carousel.Item>
// 		</Carousel>
// 	);
// }

function studio() {
	const data = [
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979006/gites/studio/studio_7_zkwb3o.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_1_sqv41z.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_5_eo7chb.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_4_ifxian.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_6_t5dozr.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_2_jcnjrw.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_3_eter7d.webp",
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
				<h2>Studio </h2>
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

export default studio;
