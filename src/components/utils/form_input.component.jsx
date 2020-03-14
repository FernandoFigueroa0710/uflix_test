import React from "react";

const FormInput = ({ handleChange, label, type, ...otherProps }) => (
	<div className="form-input">
		<label htmlFor="Input" className="label">
			Enter your {label}
		</label>
		<input onChange={handleChange} {...otherProps} type={type} />
	</div>
);

export default FormInput;
