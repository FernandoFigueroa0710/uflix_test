import React from "react";

const FoodBoxItem = ({ item }) => {
	const { name, calories, quantity, image } = item;
	return (
		<div className="food-item">
			<div className="food-item_image">
				<img src={image} alt="FOOD" />
			</div>
			<div className="food-item_info">
				<div>{name}</div>
				<div> Calories:{calories}</div>
			</div>
			<div className="food-item_quantity">{quantity}</div>
			<div className="food-item_add">+</div>
		</div>
	);
};

export default FoodBoxItem;
