

function Main({cartItem,setCartItem}){
  console.log(cartItem)
    function addQuantity(inputItem){
      inputItem.quantity++;
      setCartItem([...cartItem])
    }

    function minusQuantity(inputItem){
      inputItem.quantity--;
      if(inputItem.quantity === 0){
        cartItem = cartItem.filter((product)=>product.id !== inputItem.id)
      }  
      setCartItem([...cartItem])
    }

    function total(){
       const amount =cartItem.reduce((sum,item)=> {
         return sum +(item.price *item.quantity)},0)
      return  amount.toFixed(2)
    }

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
                  <button className="quantity-btn remove-btn center" onClick={()=>minusQuantity(newItem)}>-</button>
                  <span className="quantity-text center">{newItem.quantity}</span>
                  <button className="quantity-btn add-btn center" onClick={()=>addQuantity(newItem)}>+</button>
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
            <span className="total-number">£{total()}</span>
          </div>
        </div>
      </main>
    )
}
export default Main