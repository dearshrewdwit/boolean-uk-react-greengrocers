function StoreItem({ item, cartList, setCartList }) {
	// item is the iteration of initialStoreItems

	const addItemToCart = () => {
		let itemQuantity = 1;

		const updatedList = [...cartList];

		if (cartList.find(iterated => iterated.name === item.name)) {
			let itemOfNewList = updatedList.filter(
				iterated => iterated.name === item.name
			)[0];

			itemQuantity = itemOfNewList.quantity += 1;

			updatedList[updatedList.indexOf(itemOfNewList)].quantity = itemQuantity;
		} else {
			itemQuantity = 1;

			updatedList.push({ ...item, quantity: itemQuantity });
		}

		console.log("CartList before update");
		console.log(cartList);
		setCartList(updatedList);
		console.log("CartList after update");
		console.log(cartList);
	};

	return (
		<li>
			<div className="store--item-icon">
				<img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
			</div>
			<button onClick={addItemToCart}>Add to cart</button>
		</li>
	);
}

export default StoreItem;
