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
					<input type="text" />
					<input type="email" />
					<input type="password" />
				</form>
			</div>
		);
	}
}

export default Register;
