import React, { Component } from "react";
import FormInput from "../../utils/form_input.component";

class Login extends Component {
	state = {
		username: "",
		password: "",
		isLoggedIn: false
	};
	handleChange = () => {
		console.log("here");
	};
	render() {
		return (
			<div className="container">
				<h2 className="title">I already have an account</h2>
				<div className="message">
					Sign in with your email and password
				</div>
				<form className="login-form">
					<FormInput label="name" handleChange={this.handleChange} />
					<FormInput label="email" handleChange={this.handleChange} />
				</form>
			</div>
		);
	}
}

export default Login;
