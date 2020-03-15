import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="form-input">
		<input className="" onChange={handleChange} {...otherProps} />
		{label ? (
			<label
				className={`${otherProps.value.length ? "shrink" : ""}  label`}
			>
				{label}
			</label>
		) : null}
	</div>
);
export default FormInput;
