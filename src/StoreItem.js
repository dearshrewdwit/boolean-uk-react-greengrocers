function StoreItem({ self, id, name, cartList, setCartList }) {
	const addItemToCart = () => {
		let itemQuantity = 1;

		// cartList without the Item iterated
		let updatedList = [...cartList];

		if (cartList.find(item => item.name === name)) {
			console.log('\n- Included');
			// Returns the item we've pressed in an Array
			// then select the index 0 of this returned Array
			let item = updatedList.filter(item => item.name === name)[0];

			console.log('item in updatedList is:');
			console.log(item);
			itemQuantity = item.quantity;
			console.log(
				`Item quantity after setting itself to quantity is: ${itemQuantity}`
			);

			itemQuantity += 1;

			console.log('The index of the included item is:');
			console.log(updatedList.indexOf(item));

			console.log('The item inside UpdatedList is:');
			console.log(updatedList[updatedList.indexOf(item)]);

			// Update the quantity of the Item inside array
			updatedList[updatedList.indexOf(item)].quantity = itemQuantity;
		} else {
			console.log('\n- Not included');
			// ADD item to cartList
			itemQuantity = 1;
			updatedList.push({ ...self, quantity: itemQuantity });
		}

		// ADDS or INCREASE item
		// if (cartList.find(item => item.name === name)) {
		// 	console.log('- Includes');
		// 	// UPDATE quantity to be the item quantity
		// 	itemQuantity = self.quantity;

		// 	// INCREASE local quantity variable
		// 	itemQuantity += 1;

		// 	// Updates the value in the cloned array
		// 	console.log('The index of the included item is:');
		// 	console.log(updatedList[self]);
		// 	// updatedList[updatedList.indexOf(self)].quantity = itemQuantity;
		// } else {
		// 	console.log('- Not included');
		// 	// ADD item to cartList
		// 	itemQuantity = 1;
		// 	updatedList.push({ ...self, quantity: itemQuantity });
		// }

		// updatedList.map(item => {
		// 	// Looks for the Item
		// 	if (item.name === self.name) {
		// 		console.log('Item iterated has the same name as self');
		// 		// Update the Item quantity
		// 		item.quantity = itemQuantity;
		// 	}
		// 	// return item.name !== self.name;
		// });

		// console.log(updatedList);

		setCartList(updatedList);
		// setCartList([...updatedList, { ...self, quantity: itemQuantity }]);
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
