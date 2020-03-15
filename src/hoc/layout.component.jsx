import React from "react";

import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

const Layout = props => (
	<div className="main-container ">
		<Header />
		<div className="body-container">{props.children}</div>
		<Footer />
	</div>
);

export default Layout;
