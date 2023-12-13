function StoreItem({item, index}) {
  return (
    <li key={index}>
    <div className="store--item-icon">
      <img src={"../public/assets/icons/"+item.id+".svg"}
      alt={item.name}
      />
    </div>
    <p>{item.name}</p>
    <button>Add to cart</button>
  </li>
  )
}

export default function Store({storeItems}) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map((item, index) => <StoreItem item={item} key={index} />)}
      </ul>
    </header>
  )
}