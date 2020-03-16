import React from "react";
import MyButton from "../../utils/customButton.component";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Modal from "react-modal";
const FoodBoxModal = ({ handleClose, modalShow, addItem }) => {
	return (
		<Modal
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
							onClick={handleClose}
							size={35}
						/>
					</div>
				</div>
			</div>
			<MyButton onClick={addItem}>Add your item</MyButton>
		</Modal>
	);
};
export default FoodBoxModal;
