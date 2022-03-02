import './styles/reset.css'
import './styles/index.css'

import {StoreItem} from './StoreItem'
import {CartItem} from './CartItem'

import initialStoreItems from './store-items'

import {useState} from 'react'

export default function App() {
  const alphabetically = (a,b) => {
    if (a.name < b.name) return -1
    if (a.name == b.name) return 0
    if (a.name > b.name) return 1
  }

  const reverseAlphabetically = (a,b) => {
    if (a.name < b.name) return 1
    if (a.name == b.name) return 0
    if (a.name > b.name) return -1
  }

  const byPrice = (a,b) => a.price-b.price

  const [store,updateStore] = useState(initialStoreItems)
  const [filter,updateFilter] = useState("all")
  const [cart,updateCart] = useState([])
  const [[sorterFunc,sortName],updateSorter] = useState([alphabetically,"A-Z"])

  const addItemToCart = item => {
    const itemToAdd = cart.find(cartItem => cartItem.id === item.id)
    if (itemToAdd) updateCart(cart => cart.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem))
    else updateCart(cart => [...cart, {...item, ["quantity"]: 1}])
  }

  const changeCartQuantity = (id,func) => {
    const update = cart => cart.map(cartItem => cartItem.id === id ? {...cartItem, quantity: func(cartItem.quantity)} : cartItem)
    updateCart(update)
  }

  const calcTotal = cart => cart.reduce((a,b)=>a+(b.price*b.quantity),0.00).toFixed(2)

  const storeItemMapper = item => <StoreItem item={item} addItem={addItemToCart}/>

  const changeFilter = () => {
    switch(filter){
      case "all": updateFilter("fruit");
      break;
      case "fruit": updateFilter("vegetable");
      break;
      case "vegetable": updateFilter("all");
      break;
    }
  }

  const changeSort = () => {
    switch(sortName){
      case "A-Z": updateSorter([reverseAlphabetically,"Z-A"])
      break;
      case "Z-A": updateSorter([byPrice,"Price"])
      break;
      case "Price": updateSorter([alphabetically,"A-Z"])
    }
  }

  return (
    <>
      <header id="store">
        <div>
          <h1>Greengrocers</h1>
          <button onClick={changeFilter}>Filter: {filter}</button>
          <button onClick={changeSort}>Sort: {sortName}</button>
        </div>
        <ul className="item-list store--item-list">
          {filter === "all"
          ? store.sort(sorterFunc).map(storeItemMapper)
          : store.sort(sorterFunc).filter(item => item.type === filter).map(storeItemMapper)}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map(item => item.quantity > 0 && <CartItem item={item} changeQuantity={changeCartQuantity}/>)}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£${calcTotal(cart)}`}</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
