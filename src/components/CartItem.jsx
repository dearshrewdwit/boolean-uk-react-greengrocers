
export default function CartItem({onClick, items }){
  console.log(onclick)
  return (
    <ul className="item-list cart--item-list">
      {
        items.map((item, index) =>
          <>
            {
              item.idName !== '' && <li key={index}>
              <img
                className="cart--item-icon"
                src={`assets/icons/${item.idName}.svg`}
                alt={item.idName}
              />
              <p>{item.itemName}</p>
              <button id={item.idName} name="negative-button" onClick= {onClick}className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">{item.quantity}</span>
              <button id={item.idName} name="positive-button" onClick={onClick} className="quantity-btn add-btn center">+</button>
              </li>
            }
          </>
        )
      }
    </ul>
    
  )
}