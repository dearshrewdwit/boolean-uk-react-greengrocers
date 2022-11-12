import initialStoreItems from './store-items';
import StoreItem from './StoreItem';

function Header({cartList, setCartList}) {
	return (
		<header id="store">
			<h1>Greengrocers</h1>
			<ul className="item-list store--item-list">
				{initialStoreItems.map((item, index) => {
					return (
						<StoreItem
							key={index}
                            self={item}
							id={item.id}
							name={item.name}
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
