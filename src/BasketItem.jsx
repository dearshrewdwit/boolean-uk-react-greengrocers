const BasketItem = ({ item, handleAdd, handleMinus }) => {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`./assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => handleMinus(item)}
      >
        -
      </button>
      <span className="quantity-text center">{item.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => handleAdd(item)}
      >
        +
      </button>
    </li>
  );
};

export default BasketItem;
