export default function Main({cartItems, setCartItems}) {

    const increaseQuantity = (inputItem) => {
        inputItem.quantity++
        setCartItems([...cartItems])
    }

    const decreaseQuantity = (inputItem) => {
        inputItem.quantity--

        if (inputItem.quantity < 1) {
            const findIndex = cartItems.findIndex((item) => item.id === inputItem.id)
            cartItems.splice(findIndex, 1)
        }

        setCartItems([...cartItems])
    }

    const totalPrice = () => {
        const price = cartItems.map((item) => item.price * item.quantity)
        const sum = price.reduce((a, b) => a + b, 0)
        return sum.toFixed(2)
    }

    return(
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((cartItem) => (
              <li key={cartItem.name}>
                <img className='cart--item-icon' src={`assets/icons/${cartItem.id}.svg`} alt={cartItem.name} />
                <p>{cartItem.name}</p>
                <button className='quantity-btn remove-btn center' onClick={() => decreaseQuantity(cartItem)}>-</button>
                <span className='quantity-text center'>{cartItem.quantity}</span>
                <button className='quantity-btn add-btn center' onClick={() => increaseQuantity(cartItem)}>+</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{totalPrice()}</span>
          </div>
        </div>
      </main>
    ) 
}