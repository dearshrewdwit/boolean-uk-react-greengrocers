export default function CartItem({initialStoreItems, items}){
  console.log(items)
  if(items.idName === ''){
    return(
      <></>
    )
  }else return (
    <li>
      <img
        className="cart--item-icon"
        src={`/assets/icons/${items.idName}.svg`}
        alt="beetroot"
      />
      <p>{items.itemName}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">1</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  )
}