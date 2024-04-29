export default function CartContainer({cartList, onCartUpdate}) {
    return     ( <div className="cart--item-list-container">
    <ul className="item-list cart--item-list">{cartList.map((item)=>{return (<li>
  <img
    class="cart--item-icon"
    src={`assets/icons/${item.id}.svg`}
    alt={item.name}
  />
  <p>{item.name}</p>
  <button onClick={onCartUpdate(item, -1)} class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">{item.amount}</span>
  <button onClick={onCartUpdate(item, 1)} class="quantity-btn add-btn center">+</button>
</li>)
})}
    </ul>
  </div>)
}