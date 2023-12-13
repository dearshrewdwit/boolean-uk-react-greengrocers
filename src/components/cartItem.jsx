function CartItem ({item, changeQuantity}) {
  return (
    <li>
      <img 
      className="cart--item-icon"
      src={"../public/assets/icons/"+item.id+".svg"}
      alt={item.name} />
      <p>{item.name}</p>
      <button className="quantity-btn remove-btn center"
      onClick={() => changeQuantity(item, -1)}>-</button>
      <span className="quantity-text center">{item.quantity}</span>
      <button className="quantity-btn add-btn center"
      onClick={() => changeQuantity(item, 1)}>+</button>
    </li>
  )
}

export default function Cart({cartItems, changeQuantity}) {
  const calcCartTotal = () => {
    let sum = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity * cartItem.price;
    }, 0);
    return sum.toFixed(2)
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map((item, index) => <CartItem key={index} item={item} changeQuantity={changeQuantity}/>)}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{calcCartTotal()}</span>
        </div>
      </div>
    </main>
  )
}