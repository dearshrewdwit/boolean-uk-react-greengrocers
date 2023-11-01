function Header({ storeItems, selectTocart }) {
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
                <button onClick={() => (selectTocart(storeItem))}>Add to cart</button>
                {{/* The storeItem arguement passed to the selectTocart function was gotten from the storeItem parameter in the map above */}}
                </li>
            );
          })}
        </ul>
      </header>
    );
  }
  
  export default Header;
  