import React, { Component } from "react";
import Login from "./login.component";
import Register from "./register.component";
class SigninRegisterPage extends Component {
	render() {
		return (
			<div className="signin-register">
				<Login />
				<Register />
			</div>
		);
	}
}

export default SigninRegisterPage;
