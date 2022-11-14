function StoreItem({ item, cartList, setCartList }) {
  const addItemToCart = () => {
    let itemQuantity = 1;

    const updatedList = [...cartList];

    if (cartList.find(iterated => iterated.name === item.name)) {
      let itemOfNewList = updatedList.filter(
        iterated => iterated.name === item.name
      )[0];

      itemQuantity = itemOfNewList.quantity += 1;

      updatedList[updatedList.indexOf(itemOfNewList)].quantity = itemQuantity;
    } else updatedList.push({ ...item, quantity: itemQuantity });

    setCartList(updatedList);
  };

  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={addItemToCart}>Add to cart</button>
    </li>
  );
}

export default StoreItem;
