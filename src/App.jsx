import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import Header from './component/Store';
import Cart from './component/Cart';
import Foot from './component/footer';

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
      <Header AddToCart={AddToCart} Store={Store} imageSources={imageSources} cart={cart} setCart={setCart}></Header>
      <Cart cart={cart} MinusSpan={MinusSpan} AddSpan={AddSpan} imageSources={imageSources} Total={Total}></Cart>
      <Foot></Foot>
    </>
  )
}
