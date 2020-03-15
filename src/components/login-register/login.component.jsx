import React, { Component } from "react";
import FormInput from "../../utils/form_input.component";
import MyButton from "../../utils/customButton.component";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log("ERROR Signing in", error.message);
		}
	};

	handleChange = event => {
		event.preventDefault();
		const { value, name } = event.target;
		console.log("!!", event.target);
		this.setState({ [name]: value });
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className="container">
				<h2 className="title">I already have an account</h2>
				<div className="message">
					Sign in with your email and password
				</div>
				<form className="login-form" onSubmit={this.handleSubmit}>
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
					<div className="buttons">
						<MyButton type="submit" value="Submit form">
							Sign in
						</MyButton>
						<span>&nbsp;&nbsp;</span>
						<MyButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</MyButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
