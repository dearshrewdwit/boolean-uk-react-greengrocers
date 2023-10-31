function Header({ storeItems }) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map((storeItem) => {
          <li>
            <div class="store--item-icon"></div>
            <button>Add to cart</button>
          </li>;
          console.log(`this is the store list ${storeItem}`);
        })}
      </ul>
    </header>
  );
}

export default Header;
