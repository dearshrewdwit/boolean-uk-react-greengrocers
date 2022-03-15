import CartItem from '../CartItem/CartItem'

function CartSection({
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  priceItemsInCart,
  cart
}) {
  console.log('look here', cart)
  return (
    <>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map(cartItem => {
              return (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  incrementCartItemQuantity={incrementCartItemQuantity}
                  decrementCartItemQuantity={decrementCartItemQuantity}
                />
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£ ${priceItemsInCart(
              cart
            )}`}</span>
          </div>
        </div>
      </main>
    </>
  )
}

export default CartSection
