import initialStoreItems from './store-items';

function Header(props) {
	// props: cartList, setCartList
	console.log(`Header is receiving props:`);
	console.log(props);

	return (
		<header id="store">
			<h1>Greengrocers</h1>
			<ul className="item-list store--item-list">
				{initialStoreItems.map(item => {
					console.log(item.name);
				})}
			</ul>
		</header>
	);
}

export default Header;
