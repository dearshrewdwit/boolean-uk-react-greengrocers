import "./styles/index.css";
import "./styles/reset.css";

import storeItems from "./store-items";

import { useReducer, useState } from "react";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD": {
			const nCart = [...state];

			const itemInCartIndex = nCart.findIndex(
				(e) => e.id === action.payload.id
			);
			if (itemInCartIndex >= 0) {
				const item = { ...nCart[itemInCartIndex] };
				item.quantity++;
				nCart.splice(itemInCartIndex, 1, item);
				return nCart;
			} else {
				nCart.push({ ...action.payload, quantity: 1 });
				return nCart;
			}
		}
		case "DEL": {
			const nCart = [...state];
			const itemInCartIndex = nCart.findIndex(
				(e) => e.id === action.payload.id
			);
			if (itemInCartIndex >= 0) {
				const item = { ...nCart[itemInCartIndex] };
				if (item.quantity > 1) {
					item.quantity--;
					nCart.splice(itemInCartIndex, 1, item);
					return nCart;
				} else {
					nCart.splice(itemInCartIndex, 1);
					return nCart;
				}
			} else {
				return nCart;
			}
		}
		default:
			return [];
	}
};
const addToCartAction = (item) => {
	return { type: "ADD", payload: item };
};
const delFromCartAction = (item) => {
	return { type: "DEL", payload: item };
};

export default function App() {
	const [cart, dispatchCartAction] = useReducer(cartReducer, []);
	return (
		<>
			<Store
				list={storeItems}
				onAddItemToCart={(item) =>
					dispatchCartAction(addToCartAction(item))
				}
			/>
			<Cart
				list={cart}
				onAddItem={(item) => dispatchCartAction(addToCartAction(item))}
				onRemoveItem={(item) =>
					dispatchCartAction(delFromCartAction(item))
				}
			/>
			<div>
				Icons made by
				<a
					href="https://www.flaticon.com/authors/icongeek26"
					title="Icongeek26">
					Icongeek26
				</a>
				from
				<a
					href="https://www.flaticon.com/"
					title="Flaticon">
					www.flaticon.com
				</a>
			</div>
		</>
	);
}
