import React from "react";

const FoodBoxItem = ({ item, handleCount }) => {
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
			<div className="food-item_add" onClick={() => handleCount(item)}>
				+
			</div>
		</div>
	);
};

export default FoodBoxItem;
