export default function Cart({ cart, addToCart }) {
  function handleClick(e, item) {
    if (e.target.innerText === "+") {
      item.quantity++;
    }
    if (e.target.innerText === "-") {
      item.quantity--;
    }
    addToCart([...cart]);
  }

  return cart.map((item, index) => {
    if (item.quantity) {
      return (
        <li key={index}>
          <img
            src={`/assets/icons/${item.id}.svg`}
            alt={item.name}
            className="cart--item-icon"
          />
          <p>{item.name}</p>
          <button
            onClick={(e) => handleClick(e, item)}
            className="quantity-btn remove-btn center"
          >
            -
          </button>
          <span className="quantity-text center">{item.quantity}</span>
          <button
            onClick={(e) => handleClick(e, item)}
            className="quantity-btn add-btn center"
          >
            +
          </button>
        </li>
      );
    }
  });
}
