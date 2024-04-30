export default function CartList(props) {
  function handleIncrementClick(event) {
    const { id } = event.target;

    const incrementQuantity = props.cart.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });

    props.setCart(incrementQuantity);
  }

  function handleDecrementClick(event) {
    const { id } = event.target;

    const decrementQuantity = props.cart.map((product) => {
      if (product.id === id && product.quantity > 0) {
        product.quantity = product.quantity - 1;
      }
      return product;
    });

    props.setCart(
      decrementQuantity.filter((product) => product.quantity !== 0)
    );
  }

  return (
    <ul className="item-list cart--item-list">
      {props.cart.map((product) => {
        return (
          <li key={product.id}>
            <img
              className="cart--item-icon"
              src={`assets/icons/${product.id}.svg`}
              alt={`foto of ${product.name}`}
            />
            <p>{product.name}</p>
            <button
              className="quantity-btn remove-btn center"
              id={product.id}
              onClick={handleDecrementClick}
            >
              -
            </button>
            <span className="quantity-text center">{product.quantity}</span>
            <button
              className="quantity-btn add-btn center"
              id={product.id}
              onClick={handleIncrementClick}
            >
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
}
