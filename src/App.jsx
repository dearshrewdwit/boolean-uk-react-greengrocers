import { useState } from 'react';
import './styles/reset.css';
import './styles/index.css';

import initialStoreItems from './store-items';
import Header from './Components/Header';
import MainCart from './Components/MainCart';


export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);




/// Adding a quantity key and value to the cartItem
    //This checks if the Item the user want to click is already in the cart
    //And if Item is already in the cart quantity ++
    // else, add  quantity key and value of 1
    //This function works for the storeItems in the header.jsxf
const selectTocart = (storeItem)=>{
    const updateCart = [...cartItems]

    const item = updateCart.find((item) => item.id === storeItem.id)
    if(item){
      item.quantity += 1;
    }
    else{
        updateCart.push({...storeItem, quantity: 1})
    }
    setCartItems(updateCart)
}





///Updating the quantity with + and - button
// The both arguement would be passed in the button  

const updateQuantity = (itemId, change) => {
  const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        // Ensure the quantity doesn't go below 1
        item.quantity = Math.max(1, item.quantity + change);
      }
      return item;
    }).filter((item) => item.quantity > 1); // Remove items with quantity 1

  setCartItems(updatedCartItems);
};
// this filter above takes all the items with quantity more than one and they are being called in this function setCartItems(updatedCartItems), 



  return (
    <>
      <Header storeItems={storeItems} selectTocart={selectTocart} />
      <MainCart  cartItems= {cartItems}  updateQuantity = {updateQuantity}/>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">
          Icongeek26
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
}
