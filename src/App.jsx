import './styles/reset.css'
import './styles/index.css'

import Header from './components/header/Header'
import MainComponent from './components/main/MainComponent'
import Footer from './components/footer/Footer'
import { useState } from 'react'

export default function App() {
  const [cartItem, setCartItem] = useState([])
  console.log(cartItem)

  return (
    <>
      <Header setCartItem={setCartItem} cartItem={cartItem} />
      <MainComponent cartItem={cartItem}/>
      <Footer />
    </>
  )
}
