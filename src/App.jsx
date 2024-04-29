import './styles/reset.css'
import './styles/index.css'
import YourItems from './components/YourItems'
import Heading from './components/Heading'
import initialStoreItems from './store-items'
import ProductItems from './components/ProductItems'
import React from 'react'



export default function App() {
const [productList, setProductList] = React.useState(initialStoreItems)
const [cartList, setCartList] = React.useState([])

const onItemClick = (product) => { return () => {
console.log('Ive been clicked', product)
}}

const onCartUpdate = () => {
  console.log('Ive been changed')
}
  return (
    <><YourItems>       
    <Heading>Green Grocers</Heading>
    <ProductItems onItemClick={onItemClick} productList={productList}/>
    </YourItems>

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
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
  )
}
