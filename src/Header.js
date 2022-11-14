import initialStoreItems from './store-items';
import StoreItem from './StoreItem';

function Header({ cartList, setCartList }) {
	return (
		<header id="store">
			<h1>Greengrocers</h1>
			<ul className="item-list store--item-list">
				{initialStoreItems.map((item, index) => {
					return (
						<StoreItem
							key={index}
							item={item}
							cartList={cartList}
							setCartList={setCartList}
						/>
					);
				})}
			</ul>
		</header>
	);
}

export default Header;
