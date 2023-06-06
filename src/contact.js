/** @format */

import Nav from "./Nav";
import "./App.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-nice-dates/build/style.css";
import { fr } from "date-fns/locale";
import { Form, Dropdown, DropdownButton } from "react-bootstrap/";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const accommodationTypes = [
	"Vetta 1, 2 à 4 personnes (17341)",
	"Vetta 2, 2 à 4 personnes (17342)",
	"Vetta 3, 4 à 6 personnes (17342)",
	"Appartement Lina 4 personnes (23041)",
	"Studio 2 persones",
];
const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function DropdownComponent({ id, title, options, onSelect, value }) {
	return (
		<DropdownButton id={id} title={value || title} onSelect={onSelect}>
			{options.map((option) => (
				<Dropdown.Item key={option} eventKey={option}>
					{option}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
}

function Contact() {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [focus, setFocus] = useState(START_DATE);
	const [accommodationType, setAccommodationType] = useState("");
	const [guests, setGuests] = useState(0);
	const [value, setValue] = useState();
	const handleFocusChange = (newFocus) => {
		setFocus(newFocus || START_DATE);
	};

	const formRef = useRef();

	const sendEmail = async (e) => {
		e.preventDefault();

		try {
			const result = await emailjs.sendForm(
				"service_f2ntg6w",
				"template_69lbxjv",
				formRef.current,
				"jBC6godHt--MxsAiB"
			);
			// handle success
			alert("Email sent successfully!");
		} catch (error) {
			// handle error
			alert("Failed to send email. Please try again.");
		}
	};

	return (
		<div>
			<Nav />

			<React.Fragment>
				<form ref={formRef} onSubmit={sendEmail}>
					<label>Prénom</label>
					<input type="text" name="user_name" required />
					<label>Nom</label>
					<input type="text" name="user_last_name" required />
					<label>Email</label>
					<input type="email" name="user_email" required />
					<label>Téléphone</label>
					<PhoneInput
						placeholder="Numéro de téléphone"
						country="FR"
						name="user_phone"
						withCountryCallingCode
						value={value}
						onChange={setValue}
					/>

					<input type="hidden" name="hebergement" value={accommodationType} />
					<input type="hidden" name="nombre" value={guests} />

					<label>Dates </label>
					<input
						type="hidden"
						name="start_date"
						value={startDate && startDate.toLocaleDateString()}
					/>
					<input
						type="hidden"
						name="end_date"
						value={endDate && endDate.toLocaleDateString()}
					/>

					<Form>
						<DateRangePicker
							startDate={startDate}
							endDate={endDate}
							focus={focus}
							onStartDateChange={setStartDate}
							onEndDateChange={setEndDate}
							onFocusChange={handleFocusChange}
							minimumLength={0}
							locale={fr}
							minimumDate={new Date()}
							format="dd MMM yy">
							{({ startDateInputProps, endDateInputProps, focus }) => (
								<div className="date-range">
									<input
										className={
											"input" + (focus === START_DATE ? " -focused" : "")
										}
										{...startDateInputProps}
										placeholder="Date d'arrivée"
										required
									/>
									<span className="date-range_arrow" />
									<input
										className={
											"input" + (focus === END_DATE ? " -focused" : "")
										}
										{...endDateInputProps}
										placeholder="Date de départ"
										required
									/>
								</div>
							)}
						</DateRangePicker>
					</Form>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<DropdownComponent
							id="dropdown-accommodation-type"
							title="Type d'hébergement"
							name="hebergement"
							options={accommodationTypes}
							onSelect={(selectedKey) => setAccommodationType(selectedKey)}
							value={accommodationType}
						/>
						<DropdownComponent
							id="dropdown-guests"
							title="Nombre de personnes"
							name="nombre"
							options={guestOptions}
							onSelect={(selectedKey) => setGuests(selectedKey)}
							value={guests}
						/>
					</div>
					<label>Message</label>
					<textarea name="message" required />
					<input type="submit" value="Envoyer" />
				</form>
			</React.Fragment>
		</div>
	);
}

const containerStyle = {
	backgroundColor: "#F5F5F5",
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

export default Contact;
