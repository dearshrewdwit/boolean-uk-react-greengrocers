import './styles/reset.css'
import './styles/index.css'

import {StoreItem} from './StoreItem'
import {CartItem} from './CartItem'
import {Purchase} from './Purchase'
import {alphabetically, reverseAlphabetically, byPrice, succ, pred} from './helperfunctions'
import initialStoreItems from './store-items'

import {useState} from 'react'

export default function App() {
  const [store,updateStore] = useState(initialStoreItems)
  const [filter,updateFilter] = useState("all")
  const [cart,updateCart] = useState([])
  const [[sorterFunc,sortName],updateSorter] = useState([alphabetically,"A-Z"])
  const [page,updatePage] = useState("cart")

  function processCart(){
    updatePage("purchase")
  }

  function returnToCart(){
    updateCart([])
    updatePage("cart")
  }

  function modifyItemStock(array,id,func,prop){
    return array.map(arrayItem => arrayItem.id === id ? {...arrayItem, [prop]: func(arrayItem[prop])} : arrayItem)
  }

  function addItemToCart(item) {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id)
    const itemInStore = store.find(storeItem => storeItem.id === item.id)
    if (itemInStore.stock > 0){
      if (itemInCart) {
        updateCart(cart => modifyItemStock(cart,item.id,succ,'quantity'))
        updateStore(store => modifyItemStock(store,item.id,pred,'stock'))
      } else {
        updateCart(cart => [...cart, {...item, ["quantity"]: 1}])
        updateStore(store => modifyItemStock(store,item.id,pred,'stock'))
      }
    }
  }

  function changeCartQuantity(id,func) {
    let stockUpdateFunc
    if (func === succ) {
      if (store.find(item => item.id === id).stock <= 0) {return}
      else {stockUpdateFunc = pred}
    } else {stockUpdateFunc = succ}
    updateCart(cart => modifyItemStock(cart,id,func,'quantity'))
    updateStore(store => modifyItemStock(store,id,stockUpdateFunc,'stock'))
  }

  function calcTotal(cart) {
  return cart.reduce((a,b)=>a+(b.price*b.quantity),0.00).toFixed(2)
  }

  function storeItemMapper(item){
    return <StoreItem item={item} addItem={addItemToCart}/>
  }

  function toggleFilter(){
    switch(filter){
      case "all": updateFilter("fruit");
      break;
      case "fruit": updateFilter("vegetable");
      break;
      case "vegetable": updateFilter("all");
      break;
    }
  }

  function toggleSort() {
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
          <button onClick={toggleFilter}>Filter: {filter}</button>
          <button onClick={toggleSort}>Sort: {sortName}</button>
        </div>
        <ul className="item-list store--item-list">
          {filter === "all"
          ? store.sort(sorterFunc).map(storeItemMapper)
          : store.sort(sorterFunc).filter(item => item.type === filter).map(storeItemMapper)}
        </ul>
      </header>
      {page === "cart" && <main id="cart">
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
          <button onClick={() => processCart()}>Purchase</button>
        </div>
      </main>}
      {page === "purchase" && <Purchase cart={cart} total={calcTotal(cart)} returnToCart={returnToCart}/>}
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
