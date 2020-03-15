import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
	auth,
	createUserProfileDocument
} from "./components/firebase/firebase.utils";
//import Layout from "./hoc/layout.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SigninRegisterPage from "./components/login-register/index";
import LandingPage from "./components/landing-page/landingPage.component";
import FoodBox from "./components/foodbox/foodBox.component";
import Monies from "./components/monies/monies.component";
class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsuscribeFromAuth = null;

	componentDidMount() {
		this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				this.setState({ currentUser: null });
			}
		});
	}

	componentWillUnmount() {
		this.unsuscribeFromAuth();
	}
	render() {
		const { currentUser } = this.state;
		console.log("APP RENDER USER", this.state.currentUser);
		return (
			<div className="main-container ">
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/sign_up" component={SigninRegisterPage} />
					<Route path="/food" component={FoodBox} />
					<Route path="/monies" component={Monies} />
					{currentUser ? (
						<Redirect to="/" />
					) : (
						<Redirect to="/sign_up" />
					)}
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
