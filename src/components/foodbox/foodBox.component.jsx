import React from "react";
import FoodBoxItem from "./foodBoxItem.component";
import myFoods from "../../resources/foods";
const Foodbox = () => {
	return (
		<div className="foodBox-container">
			<div className="foodBox-items">
				{myFoods
					? myFoods.map((item, i) => (
							<FoodBoxItem key={i} item={item} />
					  ))
					: "NOT"}
			</div>
			<div className="foodBox-info">
				<span>Food INFO </span>
			</div>
		</div>
	);
};

export default Foodbox;
