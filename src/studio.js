/** @format */
import Nav from "./Nav";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
import paysage from "./paysage.jpg";
import NoTransitionExample from "./carrousel.js";
import { Carousel } from "react-carousel-minimal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
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
	const images = [
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979006/gites/studio/studio_7_zkwb3o.webp",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979006/gites/studio/studio_7_zkwb3o.webp",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_1_sqv41z.webp",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_1_sqv41z.webp",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_5_eo7chb.webp",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_5_eo7chb.webp",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_4_ifxian.webp",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_4_ifxian.webp",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_6_t5dozr.webp",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_6_t5dozr.webp",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_2_jcnjrw.webp",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_2_jcnjrw.webp",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_3_eter7d.webp",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979005/gites/studio/studio_3_eter7d.webp",
		},
	];
	return (
		<div className="ome" style={{ background: "#3a8eba" }}>
			<Nav />

			<div style={{ textAlign: "center" }}>
				<h2>Studio </h2>
				<div
					style={{
						padding: "0 20px",
					}}>
					<ImageGallery
						items={images}
						showIndex={true}
						autoPlay={true}
						slideInterval={6000}
						slideDuration={600}
						style={{
							textAlign: "center",
							maxWidth: "850px",
							maxHeight: "500px",
							margin: "40px auto",
						}}
					/>
					<div className="city-description-container">
						<h1>Studio au cœur de Porto-Vecchio</h1>
						<p>
							Ce studio extrêmement confortable, doté d'une terrasse donnant sur
							un jardin, est situé au sein d'une propriété privée à proximité du
							centre-ville de Porto-Vecchio. Vous bénéficierez d'une place de
							stationnement pour votre véhicule au sein de la propriété, ce qui
							facilitera vos déplacements.
						</p>
						<p>
							Le centre-ville se trouve à seulement 500 mètres, tandis que le
							port de plaisance est à une courte distance de 800 mètres.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default studio;
