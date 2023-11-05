const CartItem = ({ data, countDecrease, countIncrease }) => {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${data.id}.svg`}
        alt={data.name}
      />
      <p>{data.name}</p>
      <button
        onClick={() => countDecrease(data)}
        className="quantity-btn remove-btn center"
      >
        -
      </button>
      <span className="quantity-text center">{data.count}</span>
      <button
        onClick={() => countIncrease(data)}
        className="quantity-btn add-btn center"
      >
        +
      </button>
    </li>
  );
};

export default CartItem;
