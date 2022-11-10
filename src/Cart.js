import { useState } from 'react';

function Cart(props) {
	// props: cartList, setCartList
	console.log(`Cart is receiving props:`);
	console.log(props);

	const [cartTotal, setCartTotal] = useState(0);

	return (
		<main id="cart">
			<h2>Your Cart</h2>
			<div className="cart--item-list-container">
				<ul className="item-list cart--item-list">
					{/* if (cartList.length === 0) {console.log('bu')} */}

					{props.cartList.length === 0 ? (
						<p>Empty Cart</p>
					) : (
						props.cartList.map(item => {
							<p>{item.name}</p>;
							console.log(item.name);
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
