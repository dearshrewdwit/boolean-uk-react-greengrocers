function Inside({ cartItem, setCartItem }) {
  function addQuantity(inputItem) {
    inputItem.quantity++;
    setCartItem([...cartItem]);
  }

  function minusQuantity(inputItem) {
    inputItem.quantity--;
    if (inputItem.quantity === 0) {
      cartItem = cartItem.filter((product) => product.id !== inputItem.id);
    }
    setCartItem([...cartItem]);
  }
  return cartItem.map((newItem) => {
    return (
      <li key={newItem.id}>
        <img
          src={`assets/icons/${newItem.id}.svg`}
          alt={`${newItem.name}`}
          className="cart--item-icon"
        />
        <p>{newItem.name}</p>
        <button
          className="quantity-btn remove-btn center"
          onClick={() => minusQuantity(newItem)}
        >
          -
        </button>
        <span className="quantity-text center">{newItem.quantity}</span>
        <button
          className="quantity-btn add-btn center"
          onClick={() => addQuantity(newItem)}
        >
          +
        </button>
      </li>
    );
  });
}
export default Inside;
