import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
const Header = ({ currentUser }) => {
	console.log("HEADER USER", currentUser, "AUTH", auth);
	return (
		<header className="header">
			{currentUser ? (
				<h1 className="App-title">Welcome {currentUser.displayName}</h1>
			) : (
				<h1 className="App-title">Welcome to Uflix test</h1>
			)}

			{currentUser ? (
				<div className="header_end">
					<Link className="links" to="/monies">
						My monies
					</Link>
					<Link className="links" to="/food">
						My Food
					</Link>
					<Link
						className="links"
						onClick={() => auth.signOut()}
						to="/"
					>
						Signout
					</Link>
				</div>
			) : (
				<div className="header_end">
					<div>Login</div>
					<div>Register</div>
				</div>
			)}
		</header>
	);
};

export default Header;
