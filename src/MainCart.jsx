export default function MainCart({ cart, setCart }) {
  //function to update total everytime an item is added to cart:
  let total = cart
    .reduce((total, cartItem) => {
      return (total += cartItem.quantity * cartItem.price);
    }, 0)
    .toFixed(2);

  console.log("total", total);

  //function to decrease items quantity/remove it from cart if quantity reaches 0:
  function decreaseQuantity(cartItem, index) {
    if (cartItem.quantity === 1) {
      cart.splice(index, 1);
      console.log("spliced cart", cart);
      setCart([...cart]);
    } else {
      cartItem.quantity--;
      setCart([...cart]);
    }
  }

  //funciton to increase quantity per click:
  function increaseQuantity(cartItem) {
    console.log("You clicked the add button on", cartItem);
    cartItem.quantity++;
    setCart([...cart]);
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map((cartItem, index) => (
            <li key={index}>
              <img
                className="cart--item-icon"
                src={"assets/icons/" + cartItem.id + ".svg"}
                alt={cartItem.name}
              />
              <p>{cartItem.name}</p>
              <button
                className="quantity-btn remove-btn center"
                onClick={() => {
                  decreaseQuantity(cartItem, index);
                }}
              >
                -
              </button>
              <span className="quantity-text center">{cartItem.quantity}</span>
              <button
                className="quantity-btn add-btn center"
                onClick={() => {
                  increaseQuantity(cartItem);
                }}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{total}</span>
        </div>
      </div>
    </main>
  );
}
