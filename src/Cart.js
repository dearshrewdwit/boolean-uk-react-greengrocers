import { useState } from 'react';

function Cart({cartList, setCartList}) {
	const [cartTotal, setCartTotal] = useState(0);

	return (
		<main id="cart">
			<h2>Your Cart</h2>
			<div className="cart--item-list-container">
				<ul className="item-list cart--item-list">
					{/* if (cartList.length === 0) {console.log('bu')} */}

					{cartList.length === 0 ? (
						<p>Empty Cart</p>
					) : (
						cartList.map((item, index) => {
							return <p key={index}>{item.name} - Quantity: {item.quantity}</p>;
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
