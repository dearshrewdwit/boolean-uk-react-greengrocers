import CartItem from "./CartItem";
function CartList({ cartItems, setCartItems }) {
  return (
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </ul>
    </div>
  );
}
export default CartList;
