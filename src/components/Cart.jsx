import CartItem from "./CartItem";

export default function Cart({ onClick, items , total}){
  return (
    <main id="cart">
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <CartItem onClick={onClick} items={items}/>
    </div>
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{total.toFixed(2)}</span>
      </div>
    </div>
  </main>
  )
}
