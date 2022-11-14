import './styles/reset.css';
import './styles/index.css';

import { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';

export default function App() {
	const [cartList, setCartList] =useState([]); 

	return (
		<>
			{/* props: cartList, setCartList, shopList, setShopList */}
			<Header
				cartList={cartList}
				setCartList={setCartList}
				// shopList={shopList}
				// setShopList={setShopList}
			/>

			<Cart
				cartList={cartList}
				setCartList={setCartList}
			/>

			<Footer />
		</>
	);
}
