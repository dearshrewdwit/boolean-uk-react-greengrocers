function CartItem ({item}) {
  return (
    <li>
      <img 
      className="cart--item-icon"
      src={"../public/assets/icons/"+item.id+".svg"}
      alt={item.name} />
      <p>{item.name}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">{item.quantity}</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  )
}

export default function Cart({cartItems}) {
  const calcCartTotal = () => {
    let sum = 0
    cartItems.forEach((cartItem) => {
      sum += cartItem.quantity * cartItem.price
    })
    return sum.toFixed(2)
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map((item, index) => <CartItem item={item} key={index} />)}
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