import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Login from "./login.component";
import Register from "./register.component";
class SigninRegisterPage extends Component {
	render() {
		return this.props.currentUser ? (
			<Redirect to="/" />
		) : (
			<div className="signin-register">
				<Login />
				<Register />
			</div>
		);
	}
}

export default SigninRegisterPage;
