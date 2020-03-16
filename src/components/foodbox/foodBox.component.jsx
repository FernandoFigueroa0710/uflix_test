import React, { Component } from "react";
import FoodBoxItem from "./foodBoxItem.component";
import SearchBox from "../searchbox/searchBox.component";
import myFoods from "../../resources/foods";
import MyButton from "../../utils/customButton.component";
import FoodBoxModal from "./foodboxModal.component";

class Foodbox extends Component {
	constructor() {
		super();
		this.state = {
			filteredFoods: [],
			searchField: "",
			modalShow: false
		};
	}
	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};
	handleOpen = () => {
		this.setState({ modalShow: true });
	};
	handleClose = () => {
		this.setState({ modalShow: false });
	};
	addItem = () => {};
	render() {
		const { searchField, modalShow } = this.state;
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
					<FoodBoxModal
						handleClose={this.handleClose}
						modalShow={modalShow}
						addItem={this.addItem}
					/>
					<div className="foodBox-info">
						<span>Food INFO </span>

						<MyButton onClick={this.handleOpen}>
							Add a new item
						</MyButton>
					</div>
				</div>
			</div>
		);
	}
}

export default Foodbox;
