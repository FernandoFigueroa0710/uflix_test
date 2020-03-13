import React, { Component } from "react";

class Login extends Component {
	state = {
		username: "",
		password: "",
		isLoggedIn: false
	};
	render() {
		return (
			<div className="container">
				<h2 className="title">I already have an account</h2>
				<div className="message">
					Sign in with your email and password
				</div>
				<form className="login-form">
					<input type="text" />
					<input type="email" />
				</form>
			</div>
		);
	}
}

export default Login;
