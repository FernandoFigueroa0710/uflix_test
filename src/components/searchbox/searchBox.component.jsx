import React from "react";

const SearchBox = ({ placeholder, handleSearch }) => (
	<div className="searchbox-container">
		<h2 className="message">Welcome to the part 2 of the test!</h2>
		<input
			className="search-box"
			type="search"
			placeholder={placeholder}
			onChange={handleSearch}
		/>
	</div>
);
export default SearchBox;
