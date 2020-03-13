import React, { Component } from "react";

import Layout from "./hoc/layout.component";

class App extends Component {
	render() {
		return (
			<Layout>
				<div className="main-container">
					<p className="">
						To get started, edit <code>src/App.js</code> and save to
						reload.
					</p>
				</div>
			</Layout>
		);
	}
}

export default App;
