/** @format */
import Nav from "./Nav";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import paysage from "./paysage.jpg";
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

function vetta3() {
	const data = [
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta19C_asu04m.jpg",
		},
		{
			image:
				" https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta_20C_ufqldk.jpg",
		},

		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta18C_kmijbu.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta16C_m7cbhn.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta17C_rmausa.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta15C_wo4bwh.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta3C_md1aic.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta1C_nlygra.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta2C_xfyzkk.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta5C_hrpwbu.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta6C_gaqid3.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta4C_ailpak.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta7C_w0lyof.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta10C_grcjxu.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta9C_bby4bj.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta8C_uxox64.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta11C_a50cip.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta12C_uqmfgz.jpg",
		},
		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta13C_c8slhs.jpg",
		},

		{
			image:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta21C_ljcxaq.jpg",
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
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta19C_asu04m.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta19C_asu04m.jpg",
		},
		{
			original:
				" https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta_20C_ufqldk.jpg",
			thumbnail:
				" https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta_20C_ufqldk.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta18C_kmijbu.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta18C_kmijbu.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta16C_m7cbhn.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta16C_m7cbhn.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta17C_rmausa.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta17C_rmausa.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta15C_wo4bwh.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta15C_wo4bwh.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta3C_md1aic.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta3C_md1aic.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta1C_nlygra.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta1C_nlygra.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta2C_xfyzkk.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta2C_xfyzkk.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta5C_hrpwbu.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta5C_hrpwbu.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta6C_gaqid3.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta6C_gaqid3.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta4C_ailpak.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta4C_ailpak.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta7C_w0lyof.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978913/gites/vetta3/Vetta7C_w0lyof.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta10C_grcjxu.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta10C_grcjxu.jpg",
		},

		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta9C_bby4bj.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta9C_bby4bj.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta8C_uxox64.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta8C_uxox64.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta11C_a50cip.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta11C_a50cip.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta12C_uqmfgz.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta12C_uqmfgz.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta13C_c8slhs.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978914/gites/vetta3/Vetta13C_c8slhs.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta21C_ljcxaq.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678978915/gites/vetta3/Vetta21C_ljcxaq.jpg",
		},
	];
	return (
		<div className="ome" style={{ background: "#3a8eba" }}>
			<Nav />
			<div style={{ textAlign: "center" }}>
				<h2>Gîte Vetta 3</h2>
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

export default vetta3;
