function CartItem({ item, cartList, setCartList }) {
  const increaseItem = () => {
    const updatedList = [...cartList];

    updatedList[updatedList.indexOf(item)].quantity += 1;

    setCartList(updatedList);
  };
  const decreaseItem = () => {
    let updatedList = [...cartList];

    if (item.quantity === 1) {
      updatedList = updatedList.filter(iterated => iterated.name !== item.name);
    } else {
      updatedList[updatedList.indexOf(item)].quantity -= 1;
    }

    setCartList(updatedList);
  };

  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button onClick={decreaseItem} className="quantity-btn remove-btn center">
        -
      </button>
      <span className="quantity-text center">{item.quantity}</span>
      <button onClick={increaseItem} className="quantity-btn add-btn center">
        +
      </button>
    </li>
  );
}

export default CartItem;
