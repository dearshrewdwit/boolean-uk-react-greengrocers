import './styles/reset.css'
import './styles/index.css'
import YourItems from './components/YourItems'
import Heading from './components/Heading'
import initialStoreItems from './store-items'
import ProductItems from './components/ProductItems'
import React from 'react'
import YourCart from './components/YourCart'
import CartContainer from './components/CartContainer'



export default function App() {
const [productList, setProductList] = React.useState(initialStoreItems)
const [cartList, setCartList] = React.useState([])

const onItemClick = (product) => { return () => {
  const foundProduct = cartList.find((item)=> {return item.name === product.name}) 
  if (foundProduct != undefined) {
    const filteredCartList = cartList.filter((item)=>{return item.name != product.name})
    const newCart = [...filteredCartList, {...product, amount:foundProduct.amount+1 }]
    setCartList(newCart)
  } else {
    const newCart = [...cartList, {...product, amount:1 }]
    setCartList(newCart)
  }
}}

const onCartUpdate = (product, changeNumber) => {
return ()=>{
  const newAmount = product.amount + changeNumber
  const newCart = cartList.map((item)=>{return {...item, amount:newAmount}}).filter((item)=>{return item.amount > 0})
  setCartList(newCart)
  console.log('product:', product, changeNumber)
}
}
const totalAmount = cartList.reduce((a, b)=>{return a + (b.amount * b.price)}, 0)
  return (
    <><YourItems>       
    <Heading>Green Grocers</Heading>
    <ProductItems onItemClick={onItemClick} productList={productList}/>
    </YourItems>
    <YourCart>
    <Heading>Your Cart</Heading>
    <CartContainer onCartUpdate={onCartUpdate} cartList={cartList}></CartContainer>
    <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{totalAmount.toFixed(2)}</span>
          </div>
        </div>
    </YourCart>
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
