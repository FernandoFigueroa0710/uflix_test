import React, { Component } from "react";
import Modal from "react-modal";
import MaterialIcon from "material-icons-react";
import {
	firestore,
	addFoodDocumentToCollection
} from "../firebase/firebase.utils";
import FoodBoxInfo from "./foodboxInfo.component";
import FoodBoxItem from "./foodBoxItem.component";
import SearchBox from "../searchbox/searchBox.component";
import MyButton from "../../utils/customButton.component";
import FormInput from "../../utils/form_input.component";

class Foodbox extends Component {
	constructor() {
		super();
		this.state = {
			filteredFoods: [],
			modalShow: false,
			searchField: "",
			itemName: "",
			itemCalories: 0,
			itemQuantity: 0,
			itemImgUrl: ""
		};
	}
	unSubscribeFromSnapshot = null;
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	handleSearch = event => {
		this.setState({ searchField: event.target.value });
	};
	handleOpen = () => {
		this.setState({ modalShow: true });
	};
	handleClose = () => {
		this.setState({ modalShow: false });
	};

	handleSubmit = () => {
		const { itemName, itemCalories, itemQuantity, itemImgUrl } = this.state;
		const objToSubmit = {};
		objToSubmit.name = itemName;
		objToSubmit.calories = itemCalories;
		objToSubmit.quantity = itemQuantity;
		objToSubmit.image = itemImgUrl;
		addFoodDocumentToCollection(objToSubmit);
	};
	handleItemCount = item => {
		console.log("HERE", item);
	};
	componentDidMount() {
		const foodCollectionRef = firestore.collection("foods");
		foodCollectionRef.onSnapshot(async snapShot => {
			const transformedCollection = snapShot.docs.map(doc => {
				const { name, calories, image, quantity } = doc.data();
				return { name, calories, image, quantity };
			});
			this.setState({ filteredFoods: transformedCollection });
		});
	}
	render() {
		const { searchField, modalShow, filteredFoods } = this.state;
		const foodList = filteredFoods.filter(item => {
			return item.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (
			<div>
				<SearchBox
					handleSearch={this.handleSearch}
					placeholder="Search for your favorite food"
				/>
				<div className="foodBox-container">
					<div className="foodBox-items">
						{foodList
							? foodList.map((item, i) => (
									<FoodBoxItem
										key={i}
										item={item}
										handleCount={this.handleItemCount}
									/>
							  ))
							: "NOT"}
					</div>
					<Modal
						ariaHideApp={false}
						isOpen={modalShow}
						contentLabel="TEST"
						className="modal"
						overlayClassName="modal-overlay"
						closeTimeoutMS={300}
					>
						<div className="modal_content">
							<div className="modal_content-text">
								You can add another item to your list
								<div className="modal_content-text_icon">
									<MaterialIcon
										icon="close"
										onClick={this.handleClose}
										size={35}
									/>
								</div>
							</div>
							<div className="modal_content-form">
								<form action="" onSubmit={this.handleSubmit}>
									<FormInput
										name="itemName"
										type="text"
										value={this.state.itemName}
										handleChange={this.handleChange}
										label="Enter item name"
										required
									/>
									<FormInput
										name="itemCalories"
										type="number"
										value={this.state.itemCalories}
										handleChange={this.handleChange}
										label="Enter item calories"
										required
									/>
									<FormInput
										name="itemQuantity"
										type="number"
										value={this.state.itemQuantity}
										handleChange={this.handleChange}
										label="Enter item quantity"
										required
									/>
									<FormInput
										name="itemImgUrl"
										type="text"
										value={this.state.itemImgUrl}
										handleChange={this.handleChange}
										label="Enter item image Url"
										required
									/>
								</form>
							</div>
						</div>
						<MyButton onClick={this.handleSubmit}>
							Add your item
						</MyButton>
					</Modal>
					<div className="foodBox-info">
						<FoodBoxInfo />
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
