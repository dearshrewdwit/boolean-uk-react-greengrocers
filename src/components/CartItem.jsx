
export default function CartItem({ items }){
 
  let i =0
  return (
    <ul className="item-list cart--item-list">
      {items.map((item) => {
        
        <li>
        <img
          className="cart--item-icon"
          src={`assets/icons/${item.idName}.svg`}
          alt={item.itemName}
        />
        <p>{item.itemName}</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">{item.quantity}</span>
        <button className="quantity-btn add-btn center">+</button>
      </li>
      })}
      </ul>
    
  )
}