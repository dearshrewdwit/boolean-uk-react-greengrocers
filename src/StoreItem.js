function StoreItem({ self, id, name, cartList, setCartList }) {
	const addItemToCart = () => {
		let itemQuantity = 1;

		const updatedList = [...cartList];

		if (cartList.find(item => item.name === name)) {
			// Returns the item we've pressed in an Array
			// then select the index 0 of this returned Array
			let item = updatedList.filter(item => item.name === name)[0];

			// Quantity becomes the previous PLUS 1
			itemQuantity = item.quantity += 1;

			// Update the quantity of the Item inside array
			updatedList[updatedList.indexOf(item)].quantity = itemQuantity;
		} else {
			// First time in cart, so 1
			itemQuantity = 1;

			// Update the Array to have the new item
			updatedList.push({ ...self, quantity: itemQuantity });
		}

		// updatedList is a clone of cartList, and has the updated quantity or the new item added
		setCartList(updatedList);
	};

	return (
		<li>
			<div className="store--item-icon">
				<img src={`/assets/icons/${id}.svg`} alt={name} />
			</div>
			<button onClick={addItemToCart}>Add to cart</button>
		</li>
	);
}

export default StoreItem;
