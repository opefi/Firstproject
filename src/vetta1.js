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

function vetta1() {
	const data = [
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678978987/gites/vetta1/Vetta2A_pjoxnm.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978987/gites/vetta1/Vetta_18A_osvxlg.jpg",
			caption: "",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_19A_yjtucx.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678978987/gites/vetta1/Vetta1A_entbsu.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_16A_jjjfkl.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_17A_fgbkcu.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_15A_dadirr.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_14A_nqob08.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_12A_z7j0vs.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_5A_gbnt9r.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_4A_dd6zc4.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_9A_mknkbc.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_6A_ai5k67.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_10A_fkqhqd.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_7A_b743pp.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_8A_zhlkaa.jpg",
		},

		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_11A_yuvbpb.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_20A_a9hfai.jpg",
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
				"https://res.cloudinary.com/dvqehinft/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678978987/gites/vetta1/Vetta2A_pjoxnm.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678978987/gites/vetta1/Vetta2A_pjoxnm.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978987/gites/vetta1/Vetta_18A_osvxlg.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978987/gites/vetta1/Vetta_18A_osvxlg.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_19A_yjtucx.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_19A_yjtucx.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678978987/gites/vetta1/Vetta1A_entbsu.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678978987/gites/vetta1/Vetta1A_entbsu.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_16A_jjjfkl.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_16A_jjjfkl.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_17A_fgbkcu.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_17A_fgbkcu.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_15A_dadirr.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_15A_dadirr.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_14A_nqob08.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_14A_nqob08.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_12A_z7j0vs.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_12A_z7j0vs.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_5A_gbnt9r.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_5A_gbnt9r.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_4A_dd6zc4.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_4A_dd6zc4.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_9A_mknkbc.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_9A_mknkbc.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_6A_ai5k67.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_6A_ai5k67.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_10A_fkqhqd.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_10A_fkqhqd.jpg",
		},

		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_7A_b743pp.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978984/gites/vetta1/Vetta_7A_b743pp.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_8A_zhlkaa.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_8A_zhlkaa.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_11A_yuvbpb.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978985/gites/vetta1/Vetta_11A_yuvbpb.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_20A_a9hfai.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978986/gites/vetta1/Vetta_20A_a9hfai.jpg",
		},
	];
	return (
		<div className="ome" style={{ background: "#3a8eba" }}>
			<Nav />

			<div style={{ textAlign: "center" }}>
				<h2>Gîte Vetta 1</h2>
				<div
					style={{
						padding: "0 20px",
					}}>
					{/* <Carousel
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
					/> */}
					<ImageGallery
						items={images}
						showIndex={true}
						autoPlay={true}
						// slideInterval={6000}
						// slideDuration={600}
						style={{
							textAlign: "center",
							maxWidth: "850px",
							maxHeight: "500px",
							margin: "40px auto",
						}}
					/>
					<div className="city-description-container">
						<p>
							Ce gîte, idéal pour un couple, est situé à seulement 5 minutes du
							centre ville de Porto-Vecchio et à 1 km de la plage, dans la
							charmante commune de Porto-Vecchio. Les gîtes de la Vetta sont à
							proximité de la magnifique baie de Saint Cyprien.
						</p>
						<p>
							La région de l'Extrême Sud de la Corse est réputée pour ses
							trésors naturels et culturels, tels que les cités de
							Porto-Vecchio, Bonifacio, les splendides plages qui jalonnent ce
							littoral corse, la forêt de l'Ospedale, les aiguilles de Bavella
							et les montagnes sauvages et préservées. Vous aurez l'occasion de
							découvrir des paysages époustouflants et des sites inoubliables.
						</p>
						<p>
							Dans ce gîte confortable, vous profiterez de la climatisation pour
							vous rafraîchir durant les chaudes journées d'été. De plus, un
							jardin privatif entouré de verdure vous permettra de savourer vos
							repas en plein air et de vous détendre dans un cadre paisible.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default vetta1;
