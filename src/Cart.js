import CartItem from './CartItem';

function Cart({ cartList, setCartList }) {
	let cartTotal = 0;

	if (cartList.length !== 0) {
		// Iterate though the item
		for (let iteratedItem of cartList) {
			// Iterate though the item quantity
			for (let i = 0; i < iteratedItem.quantity; i++) {
				cartTotal += iteratedItem.price;
			}
		}
	}
	// EMPTY CARTLIST, TOTAL SHOULD BE ZERO
	else cartTotal = 0;

	return (
		<main id="cart">
			<h2>Your Cart</h2>
			<div className="cart--item-list-container">
				<ul className="item-list cart--item-list">
					{/* if (cartList.length === 0) {console.log('bu')} */}

					{cartList.length === 0 ? (
						<h3>Empty Cart</h3>
					) : (
						cartList.map((item, index) => {
							return (
								<CartItem
									key={index}
									item={item}
									cartList={cartList}
									setCartList={setCartList}
								/>
							);
						})
					)}
				</ul>
			</div>
			<div className="total-section">
				<div>
					<h3>Total</h3>
				</div>
				<div>
					<span className="total-number">£{Number(cartTotal).toFixed(2)}</span>
				</div>
			</div>
		</main>
	);
}

export default Cart;
