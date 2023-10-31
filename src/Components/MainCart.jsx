

function MainCart({cartItems}){
    return(
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((cartItem) =>{
                return(
                    <li>
                    <img
                        class="cart--item-icon"
                        src={`assets/icons/${cartItem.id}.svg`}
                        alt={cartItem.name}
                    />
                    <p>{cartItem.name}</p>
                    <button class="quantity-btn remove-btn center">-</button>
                    <span class="quantity-text center">1</span>
                    <button class="quantity-btn add-btn center">+</button>
                </li>
                )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    )
}

export default MainCart

/* 
I want to be able to get the items i clicked  with the button

*/