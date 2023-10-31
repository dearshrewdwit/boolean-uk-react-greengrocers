import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";
import { useState } from "react";

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */



export default function App() {
  // Setup state here...
  const [items] = useState(initialStoreItems);
  const [itemsInStore, setItemsInStore] = useState([]);
  

  // const itemsInStore = [
  //    {
  //       ...itemsInStore,
  //        quantity : 1          
  //     }    
  // ]

  
  const addItemToCart = (event) => {
    
    const foundItem = itemsInStore.find(itemInTheList => itemInTheList.name === event.target.value)
    const updatedCartItem = items.find(el =>  event.target.value === el.name)
    

      if (!foundItem) {

        setItemsInStore([...itemsInStore, {...updatedCartItem, quantity: 1 }]);
        
        console.log(updatedCartItem)
        //:)
      }else {
        foundItem.quantity++;
        setItemsInStore([...itemsInStore]);
        console.log(itemsInStore)
      }   
   }

   const minusButton = (e) => {
    if (e.quantity === 1){
      const updatedItems = itemsInStore.filter(item => item !== e)
      setItemsInStore(updatedItems)
    }else{
      e.quantity--
      setItemsInStore([...itemsInStore])
      console.log(itemsInStore)
    }
   }

   const plusButton = (e) => {

    e.quantity++
    setItemsInStore([...itemsInStore])
    console.log(itemsInStore)
   }



      



  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {items.map((element, index) => (
              <li key={index}>
                <div className="store--item-icon">
                  <img
                    src={`../public/assets/icons/${element.id}.svg `}
                    alt={element.name}
                  />
                </div>
                <button 
                  value={element.name}
                  onClick={event => addItemToCart(event)}
                >Add to cart</button>
              </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {itemsInStore.map((e, index) => (
              <li key={index}>
                <img
                  className="cart--item-icon"
                  src={`../public/assets/icons/${e.id}.svg `}
                  alt={e.name}
                />
                <p>{e.name}</p>
                <button className="quantity-btn remove-btn center" onClick={() => minusButton(e)}>-</button>
                <span className="quantity-text center">{e.quantity}</span>
                <button className="quantity-btn add-btn center" onClick={() => plusButton(e)}>+</button>
            </li>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
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
  );
}
