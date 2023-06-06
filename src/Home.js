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

function Home() {
	const images = [
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983411/gites/paysage/paysage_cd0dgd.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983411/gites/paysage/paysage_cd0dgd.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1681462505/gites/paysage/beach-695056_1280_kmemgt.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1681462505/gites/paysage/beach-695056_1280_kmemgt.jpg",
		},
		// {
		// 	original:
		// 		"https://res.cloudinary.com/dvqehinft/image/upload/v1681462508/gites/paysage/IMG_7261_mzovco.jpg",
		// 	thumbnail:
		// 		"https://res.cloudinary.com/dvqehinft/image/upload/v1681462508/gites/paysage/IMG_7261_mzovco.jpg",
		// },
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1681463131/gites/paysage/corsica-ge8cf5a75f_1920_dubrgc.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1681463131/gites/paysage/corsica-ge8cf5a75f_1920_dubrgc.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1681463132/gites/paysage/genoese-ge537acdbe_1920_e3thso.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1681463132/gites/paysage/genoese-ge537acdbe_1920_e3thso.jpg",
		},
	];
	const data = [
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983411/gites/paysage/paysage_cd0dgd.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983398/gites/paysage/images_2_lqyvtj.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983398/gites/paysage/images_1_iohggu.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983398/gites/paysage/images_1_iohggu.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983398/gites/paysage/images_jyywix.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678983398/gites/paysage/t%C3%A9l%C3%A9chargement_tv59vq.jpg",
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
				<h2>Acceuil</h2>

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
					<p>
						Ce gîte, idéal pour un couple, est situé à seulement 5 km de
						Porto-Vecchio et à 1 km de la plage, dans la charmante commune de
						Porto-Vecchio. Les gîtes de la Vetta sont à proximité de la
						magnifique baie de Saint Cyprien. La région de l'extrême Sud de la
						Corse est réputée pour ses trésors naturels et culturels, tels que
						les villes de Porto-Vecchio, Bonifacio, les splendides plages qui
						jalonnent ce littoral corse, la forêt de l'Ospedale, les aiguilles
						de Bavella et les montagnes sauvages et préservées. Vous aurez
						l'occasion de découvrir des paysages époustouflants et des sites
						inoubliables. Dans ce gîte confortable, vous profiterez de la
						climatisation pour vous rafraîchir durant les chaudes journées
						d'été. De plus, un jardin privatif entouré de verdure vous permettra
						de savourer vos repas en plein air et de vous détendre dans un cadre
						paisible.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
