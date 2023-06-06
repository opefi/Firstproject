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

function vetta2() {
	const data = [
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_12B_beaags.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_18B_q0zvfi.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_19B_dvdj1g.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_2B_ardqvn.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_3B_xi6ql9.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_13B_v9tors.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_14B_drwrkq.jpg",
		},
		// {
		// 	image:
		// 		"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_12B_beaags.jpg",
		// },
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_15B_qqwkzo.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_17B_u6x7cl.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_16B_dedkar.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978966/gites/vetta2/Vetta_20B_jcquow.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_6B_mjjhae.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_4B_iszw2d.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_5B_sc1nkn.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_8B_drmhvc.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_10B_foxk3q.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_10B_foxk3q.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_11B_zzrt6s.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_9B_p7bw6v.jpg",
		},

		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978966/gites/vetta2/Vetta_21B_nadxef.jpg",
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
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_12B_beaags.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_12B_beaags.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_18B_q0zvfi.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_18B_q0zvfi.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_1B_nkis7a.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_1B_nkis7a.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_19B_dvdj1g.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_19B_dvdj1g.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_2B_ardqvn.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_2B_ardqvn.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_3B_xi6ql9.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_3B_xi6ql9.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_13B_v9tors.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_13B_v9tors.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_14B_drwrkq.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_14B_drwrkq.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_15B_qqwkzo.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_15B_qqwkzo.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_17B_u6x7cl.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_17B_u6x7cl.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_16B_dedkar.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978965/gites/vetta2/Vetta_16B_dedkar.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978966/gites/vetta2/Vetta_20B_jcquow.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978966/gites/vetta2/Vetta_20B_jcquow.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_6B_mjjhae.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_6B_mjjhae.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_7B_pbmp91.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_7B_pbmp91.jpg",
		},

		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_4B_iszw2d.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_4B_iszw2d.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_5B_sc1nkn.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978962/gites/vetta2/Vetta_5B_sc1nkn.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_8B_drmhvc.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_8B_drmhvc.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_10B_foxk3q.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978963/gites/vetta2/Vetta_10B_foxk3q.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_11B_zzrt6s.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_11B_zzrt6s.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_9B_p7bw6v.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978964/gites/vetta2/Vetta_9B_p7bw6v.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978966/gites/vetta2/Vetta_21B_nadxef.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978966/gites/vetta2/Vetta_21B_nadxef.jpg",
		},
	];
	return (
		<div className="ome" style={{ background: "#3a8eba" }}>
			<Nav />

			<div style={{ textAlign: "center" }}>
				<h2>Gîte Vetta 2 </h2>
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
						<h1>Les gîtes de la Vetta</h1>
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

export default vetta2;
