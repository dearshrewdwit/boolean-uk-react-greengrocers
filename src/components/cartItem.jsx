export default function cartItem ({item, index}) {
  return (
    <li key={index}>
      <img 
      className="cart--item-icon"
      src={"../public/assets/icons/"+item.id+".svg"}
      alt={item.name} />
      <p>{item.name}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">69</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  )
}