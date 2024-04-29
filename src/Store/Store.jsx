import React from "react";
import StoreItem from "./StoreItem";
export default function Store({ list, onAddItemToCart }) {
	return (
		<header id="store">
			<h1>Greengrocers</h1>
			<ul className="item-list store--item-list">
				{list.map((e, i) => (
					<StoreItem
						key={"store-item-" + i}
						item={e}
						onAddToCart={(item) => onAddItemToCart(item)}
					/>
				))}
			</ul>
		</header>
	);
}
