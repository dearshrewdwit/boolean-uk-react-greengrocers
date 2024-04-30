export default function MainContent ({setBasket, basket}) {
    function increaseQuantity (event) {
        // console.log(event.target.value)
        basket[event.target.value].quantity += 1
        setBasket([...basket])
        // console.log(basket)
    }

    function decreaseQuantity (event) {
        if (basket[event.target.value].quantity === 1) {
            // console.log("delete")
            // console.log(event.target.value)
            basket.splice(event.target.value, 1)
            setBasket([...basket])
            
        }
        else {
            basket[event.target.value].quantity -= 1
            setBasket([...basket])
        }

    }

    function calculateTotal () {
        let total = 0
        basket.forEach(item => {
            total += item.quantity * item.price
        });
        return (
            `£${total.toFixed(2)}`
        )
    }

    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {basket.map((item, index) => {
                        return (
                            <li key={index}>
                                <img className="cart--item-icon" src={`assets/icons/${item.id}.svg`} alt={item.name}/>
                                <p>{item.name}</p>
                                <button onClick={decreaseQuantity} className="quantity-btn remove-btn center" value={index}>-</button>
                                <span className="quantity-text center">{item.quantity}</span>
                                <button onClick={increaseQuantity} className="quantity-btn add-btn center" value={index}>+</button>
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
                    <span className="total-number">{calculateTotal()}</span>
                </div>
            </div>
      </main>
    )
}