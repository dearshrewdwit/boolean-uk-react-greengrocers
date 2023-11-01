import {useState} from 'react'

function MainCart({cartItems}){

    const [value, setValue] = useState(1);
    const [totalPrice, setTotalPrice]= useState()

    const calculateTotal = ()=>{
     const total = cartItems.reduce((sumPrice, cartItem) => sumPrice + (cartItem.price * value), 0)
        setTotalPrice(total.toFixed(2))
    }

    
    const decreaseValue = () => {
        if (value > 1) {
            setValue(value - 1);
        }
        calculateTotal()
    }
    
    const increaseValue = () => {
        setValue(value + 1);

        calculateTotal()
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
                    <button class="quantity-btn remove-btn center" onClick={decreaseValue}>-</button>
                    <span class="quantity-text center">{value}</span> 
                    <button class="quantity-btn add-btn center" onClick={increaseValue}>+</button>
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
            <span className="total-number">${totalPrice}</span>
          </div>
        </div>
      </main>
    )
}

export default MainCart

//// I have issue with the value 