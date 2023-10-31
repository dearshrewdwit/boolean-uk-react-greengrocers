import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react'

export default function App() {
  const [store, setStore] = useState(initialStoreItems);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const totalPrice = () => {
    let num = 0;
    cart.forEach(item => num += item.quantity * item.price)
    setTotal(num)
  };

  useEffect(totalPrice, [cart]);

  return (
    <>
      <Header 
        cart={cart}  
        setCart={setCart}
        store={store}
      />

      <Main
        cart={cart}
        setCart={setCart}
        total={total}
      />

      {/*<div>
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
      </div>*/}
  </>
  )
}
