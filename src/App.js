import './styles/reset.css'
import './styles/index.css'
import {useState} from 'react'

import initialStoreItems from './store-items'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/



//console.log(initialStoreItems)

export default function App() {
  // Setup state here...

  const [storeItems, setStoreItems]= useState(initialStoreItems)
  const [cartItems, setcartItems]=useState([])

  let totalCartPrice=0



  const addItemToCart=(item)=> {
    item.quantity=1
  setcartItems([...cartItems, item])
  }
 
  const plusCount=(target)=> {
    const updatedCart=cartItems.map(item=>item.id===target.id?{...item, quantity:item.quantity+1}: item)
    setcartItems(updatedCart)
    }
  
    
    const minusCount=(target)=>{
      const updatedCart=cartItems.map(item=>item.id===target.id?{...item, quantity:item.quantity-1}: item)
      //If the item quantity is 0, I want to remove it from the list of cart items
      
      setcartItems(updatedCart)
    }
    
    
      


  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(items=>{
            return <li>
            <div class="store--item-icon">
              <img src={`assets/icons/${items.id}.svg`} alt="beetroot" />
            </div>
            <button onClick={()=>addItemToCart(items)}>Add to cart</button>
          </li>
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(cartContent =>{
              totalCartPrice+=cartContent.price*cartContent.quantity
              console.log('cart', cartContent)
              return <li>
              <img
                class="cart--item-icon"
                src={`assets/icons/${cartContent.id}.svg`}
                alt="beetroot"
              />
              <p>{`${cartContent.name}`}</p>
              <button class="quantity-btn remove-btn center" onClick={()=>minusCount(cartContent)}>-</button>
              <span class="quantity-text center">{cartContent.quantity}</span>
              <button class="quantity-btn add-btn center" onClick={()=>plusCount(cartContent)}>+</button>
              
            </li>
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{totalCartPrice}</span>
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
