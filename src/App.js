import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./hoc/layout.component";

class App extends Component {
	render() {
		return (
			<Layout>
				<div className="main-container"></div>
			</Layout>
		);
	}
}

export default App;
