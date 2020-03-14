import React from "react";

const FormInput = ({
	handleChange,
	label,
	confirmPassword,
	type,
	...otherProps
}) => (
	<div className="form-input">
		<label htmlFor="Input" className="label">
			{confirmPassword ? "Confirm Password" : `Enter your ${label}`}
		</label>
		<input onChange={handleChange} {...otherProps} type={type} />
	</div>
);

export default FormInput;
