import storeItems from "../store-items"

export default function Header({initialStoreItems, cartItems, setCartItems, storeItems, setStoreItems, filter, setFilter}) {
  // const filterVeggies = storeItems.filter((eachCartItem) => eachCartItem.fruit !== true)
  // const filterFruits = storeItems.filter((eachCartItem) => eachCartItem.fruit === true)

    const addToCart = (storeItem) => {
        const itemFound = cartItems.find((eachCartItem) => storeItem.id === eachCartItem.id)

        if (itemFound){
            itemFound.quantity++
            setCartItems([...cartItems])
        }else {
            storeItem.quantity = 1
            setCartItems([...cartItems, storeItem])
        }
    }

    // --------------filtering store items ------------------------

    // let filteredItems = storeItems
  
    // if (filter === 'fruits') {
    //   filteredItems = filterFruits
    // } else if (filter === 'veggies'){
    //   filteredItems = filterVeggies
    // }

    // const showFruitsOrVeggies = (e, inputItem) => {
    //     const value = e.target.value
    //     if (value === 'veggie') {
    //         filteredItems = filterVeggies(filteredItems)
    //         // setStoreItems(filterVeggies)
    //         // console.log(filterVeggies)
    //     }else if (value === 'fruits') {
    //         filteredItems = filterFruits(filteredItems)
    //         // setStoreItems(filterFruits)
    //         // console.log(filterFruits)
    //     }
       
    //     console.log(value)
    // }

    // ------------------------------------------------------------------------------

    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <select onChange={(e) => console.log(e.target.value)}>
            <option value="">Select type</option>
            <option value='fruits'>Fruits</option>
            <option value='veggies'>Vegitables</option>
        </select>
        <ul className="item-list store--item-list">
          {initialStoreItems.map((storeItem) => (
            <li key={storeItem.id}>
              <div className='store--item-icon'>
                <img src={`/public/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
              </div>
              <button onClick={() => addToCart(storeItem)}>Add to cart</button>
            </li>
          ))}
        </ul>
      </header>
    )
}