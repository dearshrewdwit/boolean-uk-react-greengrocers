import CartItem from './CartItem';
import Footer from './Footer';

function Cart({ cartList, setCartList }) {
	let cartTotal = 0;

	// Saw it in Joel's code. nice method
	// reduce(function (accumulator, currentValue) {return}, initialValue)
	cartTotal = cartList.reduce((accumulator, item) => {
		return accumulator + item.price * item.quantity;
	}, 0);

	return (
		<aside id="cart">
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

			<Footer />
		</aside>
	);
}

export default Cart;
