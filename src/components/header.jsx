import ItemInCart from "./itemincart";

function Header({ addTheCartItem }) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        <ItemInCart addTheCartItem={addTheCartItem} />
      </ul>
    </header>
  );
}

export default Header;