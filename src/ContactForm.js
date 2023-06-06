/** @format */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import Nav from "./Nav";
const ContactForm = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_f2ntg6w",
				"template_d207pju",
				form.current,
				"jBC6godHt--MxsAiB"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	const [formStatus, setFormStatus] = React.useState("Send");
	const onSubmit = (e) => {
		e.preventDefault();
		setFormStatus("Submitting...");
		const { name, email, message } = e.target.elements;
		let conFom = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		console.log(conFom);
	};
	return (
		<div className="ome">
			<Nav />
			<form ref={form} onSubmit={sendEmail} className="form">
				<label>Name</label>
				<input type="text" name="name" />
				<label>Email</label>
				<input type="email" name="email" />
				<label>Message</label>
				<textarea name="message" />
				<button type="submit">Envoyer</button>
			</form>
		</div>
		// <div className="container mt-5">
		// 	<h2 className="mb-3">React Contact Form Component Example</h2>
		// 	<form onSubmit={onSubmit}>
		// 		<div className="mb-3">
		// 			<label className="form-label" htmlFor="name">
		// 				Name
		// 			</label>
		// 			<input className="form-control" type="text" id="name" required />
		// 		</div>
		// 		<div className="mb-3">
		// 			<label className="form-label" htmlFor="email">
		// 				Email
		// 			</label>
		// 			<input className="form-control" type="email" id="email" required />
		// 		</div>
		// 		<div className="mb-3">
		// 			<label className="form-label" htmlFor="message">
		// 				Message
		// 			</label>
		// 			<textarea className="form-control" id="message" required />
		// 		</div>
		// 		<button className="btn btn-danger" type="submit">
		// 			{formStatus}
		// 		</button>
		// 	</form>
		// </div>
	);
};
export default ContactForm;
