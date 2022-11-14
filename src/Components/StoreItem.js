function StoreItem({ item, cartItems, setCartItems }) {
  //function to add storeitem to cart
  const addToCart = (item) => {
    //checks if item already exists in cart
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      // if exists returns true,
      const updateCartItem = cartItems.map((targetCartItem) => {
        if (targetCartItem.id === item.id) {
          return { ...targetCartItem, quantity: targetCartItem.quantity + 1 };
        }

        return targetCartItem;
      });
      setCartItems(updateCartItem);
    } else {
      const newCartItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  return (
    <li key={item.id}>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </li>
  );
}
export default StoreItem;
