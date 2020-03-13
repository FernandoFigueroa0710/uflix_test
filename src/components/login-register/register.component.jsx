import React, { Component } from "react";

class Register extends Component {
	state = {
		username: "",
		email: "",
		password: ""
	};
	render() {
		return (
			<div className="container">
				<h2 className="title">I do not have an account</h2>
				<div className="message">
					Sign up with your name, email and password
				</div>
				<form className="login-form" action="">
					<label htmlFor="Name">Enter your name</label>
					<input type="text" required />
					<label htmlFor="Email">Enter your email</label>
					<input type="email" required />
					<label htmlFor="Passoword">Enter your password</label>
					<input type="password" required />
				</form>
			</div>
		);
	}
}

export default Register;
