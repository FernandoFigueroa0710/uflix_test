import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./hoc/layout.component";
import SigninRegisterPage from "./components/login-register/index";
class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route exact path="/" component={SigninRegisterPage} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
