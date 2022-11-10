import './styles/reset.css';
import './styles/index.css';

import { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

// console.log(initialStoreItems);

export default function App() {
	const [cartList, setCartList] = useState([]);

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
				setCartList={cartList}
				//
				//
			/>

			<Footer />
		</>
	);
}
