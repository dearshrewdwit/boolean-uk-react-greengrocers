
import {useState} from 'react'

export default function Header(props) {

    const [filterValue, setFilterValue] = useState('most-popular')
    const [showFruit, setShowFruit] = useState(true)
    const [showVeg, setShowVeg] = useState(true)

    let filteredStoreItems = props.storeItems

    if (filterValue === "most-popular") {
      filteredStoreItems.sort((a, b) => a.id.localeCompare(b.id));
    }
  
    if (filterValue === "lowest-price") {
      filteredStoreItems.sort((a, b) => a.price - b.price);
    }
  
    if (filterValue === "highest-price") {
      filteredStoreItems.sort((a, b) => b.price - a.price);
    }
  
    if (filterValue === "alphabetically") {
      filteredStoreItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    if(showFruit && !showVeg) {
      filteredStoreItems = filteredStoreItems.filter(item => item.type === "fruit")
    }

    if(!showFruit && showVeg) {
      filteredStoreItems = filteredStoreItems.filter(item => item.type === "veg")
    }

    if(!showFruit && !showVeg) {
      filteredStoreItems = []
    }

    const detailClick = (item) => {
      props.setShowingDetail(true)
      props.setDetailItem(item)
      console.log(item)
    }



  return (
      <header id="store">
        <h1>Greengrocers</h1>
            <div>
        <section>
      <input id="fruit" type="checkbox" checked={showFruit} onChange={() => setShowFruit(!showFruit)}/>
      Show Fruit
      <input id="veg" type="checkbox" checked={showVeg} onChange={() => setShowVeg(!showVeg)}/>
      Show Veg
      </section>
      <br/>
      <section>
      <label for="sort">Sort Items:</label>
      <select name="sort" id="sort-items" onChange={e => setFilterValue(e.target.value)}>
        <option value="most-popular">Most Popular</option>
        <option value="lowest-price">Lowest Price</option>
        <option value="highest-price">Highest Price</option>
        <option value="alphabetically">Alphabetically</option>
      </select>
      </section>
      <br/>
         </div>

        <ul className="item-list store--item-list">
          {filteredStoreItems.map(item => {
            return <li>
            <div class="store--item-icon">
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name} onClick={() => detailClick(item)}/>
            </div>
            <button onClick={() => props.addToCart(item)}>Add to cart</button>
          </li> 
          })}
        </ul>
      </header>
  )
}
