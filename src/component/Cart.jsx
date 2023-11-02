/* eslint-disable react/prop-types */
function Cart({cart, imageSources, MinusSpan, AddSpan, Total}) {

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item, index) => {
              return (
                  <li key={index}> 
                    <img className='cart--item-icon' src={imageSources[index]} alt={item.name}/>
                    <p>{item.name}</p>
                    <button onClick={() => MinusSpan(item)}  className='quantity-btn remove-btn center'>-</button>
                    <span className='quantity-text center'>{item.quantity}</span>
                    <button onClick={() => AddSpan(item)} className='quantity-btn add-btn center'>+</button>
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
            <span className="total-number">{`$${Total}`}</span>
          </div>
        </div>
      </main>
    )
}

export default Cart