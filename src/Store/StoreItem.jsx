import React from "react";

export default function StoreItem({ item, onAddToCart }) {
	return (
		<li>
			<div className="store--item-icon">
				<img
					src={`/assets/icons/${item.id}.svg`}
					alt={item.name}
				/>
			</div>
			<button onClick={() => onAddToCart(item)}>Add to cart</button>
		</li>
	);
}
