import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
const Header = ({ currentUser }) => {
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
					<Link className="links" to="/sign_up">
						SignIn
					</Link>
					<Link className="links" to="/sign_up">
						Register
					</Link>
				</div>
			)}
		</header>
	);
};

export default Header;
