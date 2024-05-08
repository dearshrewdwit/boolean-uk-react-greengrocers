import { capitalize } from "../App"

function StoreItem({item, addToCart}) {
  return (
    <li>
    <div className="store--item-icon">
      <img src={"../assets/icons/"+item.id+".svg"}
      alt={item.name}
      />
    </div>
    <p>{capitalize(item.name)}</p>
    <button onClick={() => addToCart(item)}>Add to cart</button>
  </li>
  )
}

export default function Store({storeItems, addToCart}) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map((item, index) => <StoreItem key={index} item={item} addToCart={addToCart}/>)}
      </ul>
    </header>
  )
}
