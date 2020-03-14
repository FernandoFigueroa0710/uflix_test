import React, { Component } from "react";

import FormInput from "../../utils/form_input.component";
import MyButton from "../../utils/customButton.component";
class Register extends Component {
	state = {
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	};
	render() {
		return (
			<div className="container">
				<h2 className="title">I do not have an account</h2>
				<div className="message">
					Sign up with your name, email and password
				</div>
				<form className="login-form" action="">
					<FormInput
						label="name"
						onChange={this.handleChange}
						type="text"
					/>
					<FormInput
						label="email"
						onChange={this.handleChange}
						type="email"
					/>
					<FormInput
						label="password"
						onChange={this.handleChange}
						type="password"
					/>
					<FormInput
						confirmPassword
						label=" Confirm password"
						onChange={this.handleChange}
						type="password"
					/>
				</form>
				<MyButton>Register</MyButton>
			</div>
		);
	}
}

export default Register;
