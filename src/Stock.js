export default function Stock(props) {

    const editStock = (item) => {
        props.addToStock(item)
        const updatedCart = props.cartItems.map(cartItem =>
            cartItem.name === item.name
              ? {
                  ...cartItem,
                  stockQuantity: cartItem.stockQuantity + 1
                }
              : cartItem)
        props.setCartItems(updatedCart)
    }

    return (
        <div className="stock"> 
        <div>Add Items to Stock</div>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {props.storeItems.map(storeItem => {
                return <li>
                <img
                  class="cart--item-icon"
                  src={`assets/icons/${storeItem.id}.svg`}
                  alt={storeItem.name}
                />
                <p>{storeItem.name}</p>
                <span class="quantity-text center">{storeItem.stockQuantity}</span>
                <button class="quantity-btn add-btn center" onClick={() => editStock(storeItem)}>+</button>
              </li>
            })}
          </ul>
        </div>
        <div>
        <form>
            <p>Add New Item to Stock</p>
            <label>Name</label>
            <input type="text"/><br/>
            <label>Image URL</label>
            <input type="text"/><br/>
            <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    )
  }
  