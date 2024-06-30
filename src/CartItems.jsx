export default function CartItems(props) {
  return props.cartItems.map((item) => {
    item.quantity = 0;
    return (
      <li key={item.id}>
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
        <p>{item.name}</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">{item.quantity}</span>
        <button
          className="quantity-btn add-btn center"
          onClick={() => {
            props.increaseCartItem(item);
          }}
        >
          +
        </button>
      </li>
    );
  });
}
