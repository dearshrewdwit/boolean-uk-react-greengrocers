function Header({ storeItems, selectToCart }) {
    return (
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((storeItem) => {
            return (
              <li key={storeItem.id}>
                <div className="store--item-icon">
                  <img src={`./assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
                </div>
                <button onClick={() => selectToCart(storeItem)}>Add to cart</button>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
  
  export default Header;
  