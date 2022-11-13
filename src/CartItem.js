function CartItem({ item, cartList, setCartList, cartTotal, setCartTotal }) {
	const increaseItem = () => {
		const updatedList = [...cartList];

		// Update the item quantity inside the UpdatedList only
		// - Use of indexOf(item) -
		// It works because prop "item" is the iteration of cartList (Map in Cart.js)
		// The "item" in StoreItem.js is the iteration of initialStoreItems, different.
		updatedList[updatedList.indexOf(item)].quantity = item.quantity + 1;

		setCartList(updatedList);
		updateTotal();
	};
	const decreaseItem = () => {
		console.log('Decrease item');

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
