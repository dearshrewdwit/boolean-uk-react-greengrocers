

function Main({cartItem}){
  console.log(cartItem)
    return(
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItem.map(newItem =>{
              return(
                <li key={newItem.id}>
                  <img src={`assets/icons/${newItem.id}.svg`} alt={`${newItem.name}`} 
                  className="cart--item-icon" />
                  <p>{newItem.name}</p>
                  <button className="quantity-btn remove-btn center">-</button>
                  <span className="quantity-text center">1</span>
                  <button className="quantity-btn add-btn center">+</button>
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
export default Main