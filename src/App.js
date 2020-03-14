import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./components/firebase/firebase.utils";
import Layout from "./hoc/layout.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SigninRegisterPage from "./components/login-register/index";
class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsuscribeFromAuth = null;

	componentDidMount() {
		this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({
				currentUser: user
			});
		});
	}

	componentWillUnmount() {
		this.unsuscribeFromAuth();
	}
	render() {
		console.log(this.state.currentUser);
		return (
			<div className="main-container ">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={SigninRegisterPage} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
