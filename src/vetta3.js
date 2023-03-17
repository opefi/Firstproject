/** @format */
import Nav from "./Nav";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import paysage from "./paysage.jpg";
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
	return (
		<div className="ome">
			<Nav />
			<h2>Vetta 3 </h2>
			<div style={{ textAlign: "center" }}>
				<h2>Vetta 3</h2>
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

export default vetta3;
