import initialStoreItems from './store-items'

const Store = ({addItemToCart, selectedFilters}) => {

  let itemsToRender = []

  if (selectedFilters.length === 0) {
    itemsToRender = initialStoreItems
  } else {
    itemsToRender = initialStoreItems.filter((item) => {
      if (selectedFilters.includes(item.type)) return true
      else return false
     })
  }

  return (
      <ul className="item-list store--item-list">
          {itemsToRender.map((item, index) => {
              return (
                  <li key={index}>
                  <div className="store--item-icon">
                    <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                  </div>
                  <button onClick={()=>addItemToCart(item)}>Add to cart</button>
                </li>
              )
          })}
      </ul>
  )
}

export default Store