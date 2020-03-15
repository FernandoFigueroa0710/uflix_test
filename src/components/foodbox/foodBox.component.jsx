import React, { Component } from "react";
import FoodBoxItem from "./foodBoxItem.component";
import SearchBox from "../searchbox/searchBox.component";
import myFoods from "../../resources/foods";

class Foodbox extends Component {
	constructor() {
		super();
		this.state = {
			filteredFoods: [],
			searchField: ""
		};
	}
	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		const { searchField } = this.state;
		const filteredFoods = myFoods.filter(item => {
			return item.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (
			<div>
				<SearchBox
					handleChange={this.handleChange}
					placeholder="Search for your favorite food"
				/>
				<div className="foodBox-container">
					<div className="foodBox-items">
						{filteredFoods
							? filteredFoods.map((item, i) => (
									<FoodBoxItem key={i} item={item} />
							  ))
							: "NOT"}
					</div>
					<div className="foodBox-info">
						<span>Food INFO </span>
					</div>
				</div>
			</div>
		);
	}
}

export default Foodbox;
