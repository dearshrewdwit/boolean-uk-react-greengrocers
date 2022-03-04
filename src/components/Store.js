import { useContext } from 'react'
import { CartContext } from '../helper/CartContext'
import initialStoreItems from '../data/StoreItems'

const Store = () => {
  const { cart, setCart } = useContext(CartContext)
  let sortedStoreItems = [...initialStoreItems]

  const addToCartHandler = item => {
    let found = cart.some(element => element.name === item.name)
    if (!found) {
      item.cartQuantity += 1
      setCart([...cart, { ...item }])
    }
  }

  return (
    <header id="store">
      <h1>Greengrocers</h1>

      <fieldset>
        <legend>sort by:</legend>
        <label>
          <input type="radio" name="sort" onChange={() => sortAToZ()} />A to Z
        </label>
        <label>
          <input type="radio" name="sort" onChange={() => sortZToA()} />Z to A
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => console.log('helloB')}
          />
          rating - high to low
        </label>
      </fieldset>
      <fieldset>
        <legend>filter:</legend>
        <label>
          <input
            type="checkbox"
            name="filter"
            onChange={() => console.log('helloC')}
          />
          Fruit
        </label>
        <label>
          <input
            type="checkbox"
            name="sort"
            onChange={() => console.log('hello')}
          />
          Vegetable
        </label>
      </fieldset>

      <ul className="item-list store--item-list">
        {/* {filteredData.map} */}
        {initialStoreItems.map(item => (
          <li key={item.id}>
            <section>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </section>
            <div className="store--item-icon">
              <img src={`../assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button className="btn" onClick={() => addToCartHandler(item)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Store
