import React from "react";
import "./custom-button.styles.scss";
// pull children off props that are passed into button and then destructure other props and spread that into our buton.
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
		{...otherProps}
		type="submit"
	>
		{children}
	</button>
);

export default CustomButton;
