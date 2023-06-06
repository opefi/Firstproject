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
	const images = [
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_14_dtg4nh.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_14_dtg4nh.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_9_aohmyn.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_9_aohmyn.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_6_zphhyh.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_6_zphhyh.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_8_bl2hko.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979022/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_8_bl2hko.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_7_wtmghf.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_7_wtmghf.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_5_bwjuby.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_5_bwjuby.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_4_sg0xq1.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_4_sg0xq1.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_3_uvmo1u.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_3_uvmo1u.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_1_kw0yqq.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_1_kw0yqq.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_2_e6gi1g.jpg",
			thumbnail:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_2_e6gi1g.jpg",
		},
		{
			original:
				"https://res.cloudinary.com/dvqehinft/image/upload/v1678979021/gites/lina/-porto-vecchio-le-sud-corse-labellise-gites-de-france--ref--23041_3_uvmo1u.jpg",
			thumbnail:
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
	const containerStyle = {
		backgroundColor: "#F5F5F5",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<div className="ome" style={{ background: "#3a8eba" }}>
			<Nav />

			<div style={{ textAlign: "center" }}>
				<h2>Lina</h2>

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
						<h1>T3 au cœur de Porto-Vecchio</h1>
						<p>
							Vous êtes ici en plein cœur de Porto-Vecchio : à seulement trois
							minutes à pieds du centre-ville, vous pourrez profiter de tous les
							commerces du centre-ville et de son animation : bars, restaurants,
							boutiques de vêtements, galeries d'art, commerces... mais aussi un
							patrimoine bâti riche.
						</p>
						<p>
							En vous promenant dans les ruelles pavées, vous découvrirez les
							traces des fortifications érigées par les génois : 5 bastions
							inscrits au titre des monuments historiques et la porte génoise,
							qui fut pendant longtemps la seule entrée de la citadelle et qui
							offre aujourd'hui un panorama exceptionnel sur les marais salants
							et le port de Porto-Vecchio. Mais aussi l'église Saint
							Jean-Baptiste et la chapelle Santa Cruci (Sainte Croix) se faisant
							face qui renferment chacune des petits trésors à découvrir, comme
							ce tableau de Maria Regina, datant du 18ème siècle, offert par
							l'Impératrice Eugénie.
						</p>
						<p>
							Autour de Porto-Vecchio, c'est tout ce qui fait l'attrait du Sud
							de la Corse que vous pourrez découvrir : plages paradisiaques au
							sable blanc et à l'eau turquoise telles Santa Giulia, Palombaggia,
							Saint-Cyprien et tant d'autres, mais aussi des montagnes à
							découvrir à pieds, à vélo, à cheval... dans le massif de l'Alta
							Rocca, de l'Ospedale ou le plateau du Cuscionu. Et vous ne
							manquerez pas de passer une journée à Bonifacio pour aller perdre
							votre regard le long des falaises de Calcaire, face à la
							Sardaigne.
						</p>
						<p>
							De retour de ces belles journées, vous profiterez d'un appartement
							qui, telle une petite maison de vacances en bord de mer, saura
							vous séduire par sa décoration marine et dans lequel vous
							trouverez la fraîcheur propice au repos grâce à la climatisation.
							Les enfants pourront eux profiter des jeux mis à leur disposition
							dans le jardin!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Lina;
