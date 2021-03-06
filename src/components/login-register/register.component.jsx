import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import FormInput from "../../utils/form_input.component";
import MyButton from "../../utils/customButton.component";
class Register extends Component {
	constructor() {
		super();
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}
	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords do not match!");
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		} catch (error) {
			console.log("ERROR CREATING USER", error.message);
		}
	};
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="container">
				<h2 className="title">I do not have an account</h2>
				<div className="message">
					Sign up with your name, email and password
				</div>
				<form className="login-form" onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						type="text"
						value={displayName}
						handleChange={this.handleChange}
						label="Display name"
						required
					/>
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						name="confirmPassword"
						type="password"
						value={confirmPassword}
						handleChange={this.handleChange}
						label="Confirm Password"
						required
					/>
				</form>
				<MyButton type="submit" onClick={this.handleSubmit}>
					Sign Up
				</MyButton>
			</div>
		);
	}
}

export default Register;
