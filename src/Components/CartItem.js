function CartItem({ cartItem, cartItems, setCartItems }) {
  const decreaseQuantity = (cartItem) => {
    if (cartItem.quantity > 1) {
      const updatedCartItems = cartItems.map((targetCartItem) => {
        if (targetCartItem.name === cartItem.name && targetCartItem.quantity) {
          return {
            ...targetCartItem,
            quantity: targetCartItem.quantity - 1,
          };
        }
        return targetCartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      const removeFromCart = cartItems.filter(
        (targetCartItem) => targetCartItem.name !== cartItem.name
      );
      setCartItems(removeFromCart);
    }
  };
  const increaseQuantity = (cartItem) => {
    const updatedCartItems = cartItems.map((targetCartItem) => {
      if (targetCartItem.name === cartItem.name) {
        return { ...targetCartItem, quantity: targetCartItem.quantity + 1 };
      } else {
        return targetCartItem;
      }
    });
    setCartItems(updatedCartItems);
  };

  return (
    <li key={cartItem.id}>
      <img
        className="cart--item-icon"
        src={`assets/icons/${cartItem.id}.svg`}
        alt={cartItem.name}
      />
      <p>{cartItem.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => decreaseQuantity(cartItem)}
      >
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => increaseQuantity(cartItem)}
      >
        +
      </button>
    </li>
  );
}
export default CartItem;
