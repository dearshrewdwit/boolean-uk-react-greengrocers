function CartItem({ item, cartList, setCartList, cartTotal, setCartTotal }) {
	// item is the iteration of cartList

	const increaseItem = () => {
		const updatedList = [...cartList];

		updatedList[updatedList.indexOf(item)].quantity += 1;

		setCartList(updatedList);
		updateTotal();
	};
	const decreaseItem = () => {
		let updatedList = [...cartList];

		// REMOVED
		if (item.quantity === 1) {
			// Filter updatedList to remove item from it. Returns only not equal to item
			updatedList = updatedList.filter(iterated => iterated.name !== item.name);
		}
		// DECREASED
		else {
			updatedList[updatedList.indexOf(item)].quantity -= 1;
		}

		setCartList(updatedList);

		updateTotal();
	};
	const updateTotal = () => {
		console.log('Update total');
	};

	return (
		<li>
			<img
				className="cart--item-icon"
				src={`assets/icons/${item.id}.svg`}
				alt={item.name}
			/>
			<p>{item.name}</p>
			<button onClick={decreaseItem} className="quantity-btn remove-btn center">
				-
			</button>
			<span className="quantity-text center">{item.quantity}</span>
			<button onClick={increaseItem} className="quantity-btn add-btn center">
				+
			</button>
		</li>
	);
}

export default CartItem;
