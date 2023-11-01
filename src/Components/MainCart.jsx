import {useState} from 'react'

function MainCart({cartItems, updateQuantity}){


    const calculateTotal = ()=>{
     const total = cartItems.reduce((sumPrice, cartItem) => sumPrice + (cartItem.price * cartItem.quantity), 0)
        return total.toFixed(2)
    }


    

    return(
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((cartItem) =>{
                return(
                    <li key={cartItem.id}>
                    <img
                        class="cart--item-icon"
                        src={`assets/icons/${cartItem.id}.svg`}
                        alt={cartItem.name}
                    />
                    <p>{cartItem.name}</p>
                    <button class="quantity-btn remove-btn center" onClick={()=> updateQuantity(cartItem.id, -1)}>-</button>
                    <span class="quantity-text center">{cartItem.quantity}</span> 
                    <button class="quantity-btn add-btn center" onClick={()=> updateQuantity(cartItem.id, 1)}>+</button>
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
            <span className="total-number">${calculateTotal()}</span>
          </div>
        </div>
      </main>
    )
}

export default MainCart

//// I have issue with the value 