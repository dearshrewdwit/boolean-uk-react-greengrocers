export const CartItem = props => {
    const item = props.item
    const pred = n => n-1
    const succ = n => n+1
    return <li key={item.id}>
    <img
      className="cart--item-icon"
      src={`./assets/icons/${item.id}.svg`}
      alt={`${item.name}`}
    />
    <p>{item.name}</p>
    <button className="quantity-btn remove-btn center" onClick={() => props.changeQuantity(item.id,pred)}>-</button>
    <span className="quantity-text center">{item.quantity}</span>
    <button className="quantity-btn add-btn center" onClick={() => props.changeQuantity(item.id,succ)}>+</button>
  </li>
  
}