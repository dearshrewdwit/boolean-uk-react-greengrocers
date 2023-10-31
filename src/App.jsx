import { useState } from 'react';
import './styles/reset.css';
import './styles/index.css';

import initialStoreItems from './store-items';
import Header from './Components/Header';
import MainCart from './Components/MainCart';


export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);

  const selectToCart = (storeItem) => {
    if(!cartItems.some( (item) => item.id === storeItem.id)){
      setCartItems([...cartItems, storeItem]);

    }

  };

  return (
    <>
      <Header storeItems={storeItems} selectToCart={selectToCart} />
      <MainCart  cartItems= {cartItems}/>
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
