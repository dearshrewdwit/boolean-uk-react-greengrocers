export default function StoreItem({ initialStoreItems }){
  
  const itemsList = initialStoreItems.items
  return (
    <ul className="item-list store--item-list">
      {itemsList.map((item) => {
        return (
          <li key={item.id}>
            <div className="store--item-icon">
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button>Add to cart</button>
          </li>
        )
      })}
    </ul>
  )
}