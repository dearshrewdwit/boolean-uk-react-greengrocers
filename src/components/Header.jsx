/* eslint-disable react/prop-types */
export default function Header({ cartItems, setCartItems, storeItems }) {
  function addItemToCart(inputItem) {
    const itemToAdd = cartItems.find((item) => item.id === inputItem.id);
    if (itemToAdd) {
      itemToAdd.quantity++;
      setCartItems([...cartItems]);
    } else {
      inputItem.quantity = 1;
      setCartItems([...cartItems, inputItem]);
    }
  }

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map((item) => {
          return (
            <li key={item.id}>
              <div className="store--item-icon">
                <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button onClick={() => addItemToCart(item)}>Add to cart</button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
