function CartItem({ item, cartList, setCartList, cartTotal, setCartTotal }) {
	const increaseItem = () => {
		console.log('Increase');

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
			<button onClick={increaseItem} className="quantity-btn remove-btn center">
				-
			</button>
			<span className="quantity-text center">{item.quantity}</span>
			<button onClick={decreaseItem} className="quantity-btn add-btn center">
				+
			</button>
		</li>
	);
}

export default CartItem;
