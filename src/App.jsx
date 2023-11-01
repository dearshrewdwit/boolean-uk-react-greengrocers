import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
// import Header from './component/Store';

const imageSources = [
  './assets/icons/001-beetroot.svg',
  './assets/icons/002-carrot.svg',
  './assets/icons/003-apple.svg',
  './assets/icons/004-apricot.svg',
  './assets/icons/005-avocado.svg',
  './assets/icons/006-bananas.svg',
  './assets/icons/007-bell-pepper.svg',
  './assets/icons/008-berry.svg',
  './assets/icons/009-blueberry.svg',
  './assets/icons/010-eggplant.svg'
];

export default function App() {
  const [Store] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [Total, setTotal] = useState(0)


  // fucntion to Add the item being clicked in the store to them Cart so user can be able checkout successfully 
  const AddToCart = (item, index) => {
    const UpdatedItem = [...cart]
    const Total_Amount = Total + item.price
    setTotal(Total_Amount)
    
    const ItemAlredyInCart = UpdatedItem.find((currentitem) => currentitem.id === item.id)

    if (!ItemAlredyInCart) {
      item.quantity = 1
      
      UpdatedItem.push(item)
      setCart(UpdatedItem)
      

    } else {
      console.log('00')
      ItemAlredyInCart.quantity += 1
      setCart(UpdatedItem)

    }
  }

  // fucntion to Minus the Span with -1 if it is being clicked 
  const MinusSpan = (ItemToAddSpan) => {
    const Updated_Span = [...cart]
    console.log(Updated_Span)

    const ItemToDelete = Updated_Span.find((itemdelete) => itemdelete.name === ItemToAddSpan.name)
    
    if(ItemToDelete.quantity > 1) {
      ItemToDelete.quantity -= 1
      const Total_Amount = Total - ItemToAddSpan.price
      setTotal(Total_Amount)
      setCart(Updated_Span)

    } else {
      const UpdatedSpan = Updated_Span.filter((datas) => datas.name !== ItemToDelete.name)
      console.log(UpdatedSpan)
      const Total_Amount = Total - ItemToAddSpan.price
      setTotal(Total_Amount)
      setCart(UpdatedSpan)
    }
  }


  // function to add the span with +1 if it is being clicked 
  const AddSpan = (item) => {
    const Updated_Span = [...cart]

    const ItemToAdd = Updated_Span.find((itemAdd1) => itemAdd1.name === item.name )
    console.log(ItemToAdd)

    ItemToAdd.quantity += 1
    const Total_Amount = Total + item.price
    setTotal(Total_Amount)
    setCart(Updated_Span)

  }

  
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {Store.map((item, index) => {
            return (
              <li key={item.id}> 
                 <div className='store--item-icon'> 
                    <img src={imageSources[index]} alt={item.name} />
                 </div>
                 <button onClick={() => AddToCart(item, index)}>Add To Cart</button>
              </li>
            )
          })}
        </ul>
      </header>
      {/* <Header AddToCart={AddToCart}></Header> */}

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item, index) => {
              return (
                  <li key={index}> 
                    <img className='cart--item-icon' src={imageSources[index]} alt={item.name}/>
                    <p>{item.name}</p>
                    <button onClick={() => MinusSpan(item)}  className='quantity-btn remove-btn center'>-</button>
                    <span className='quantity-text center'>{item.quantity}</span>
                    <button onClick={() => AddSpan(item)} className='quantity-btn add-btn center'>+</button>
                  </li>
              )
            })}
          </ul>
        </div>        
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{Total}</span>
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