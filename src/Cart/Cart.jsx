import React from "react";
import CartItem from "./CartItem";

export default function Cart({ list, onAddItem, onRemoveItem }) {
	const total = list.reduce((sum, i) => sum + i.price * i.quantity, 0);
	return (
		<main id="cart">
			<h2>Your Cart</h2>
			<div className="cart--item-list-container">
				<ul className="item-list cart--item-list">
					{list.map((e, i) => (
						<CartItem
							key={"cart-item-" + i}
							item={e}
							onAdd={onAddItem}
							onRemove={onRemoveItem}
						/>
					))}
				</ul>
			</div>
			<div className="total-section">
				<div>
					<h3>Total</h3>
				</div>
				<div>
					<span className="total-number">£{total.toFixed(2)}</span>
				</div>
			</div>
		</main>
	);
}
