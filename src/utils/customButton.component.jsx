import React from "react";

const MyButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
	<button
		className={`${inverted ? "inverted" : ""}  ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default MyButton;
