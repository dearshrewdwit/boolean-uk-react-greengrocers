import './styles/reset.css'
import './styles/index.css'

import Header from './components/header/Header'
import MainComponent from './components/main/MainComponent'
import Footer from './components/footer/Footer'
import { useState } from 'react'

export default function App() {
  const [cartItem, setCartItem] = useState([])

  return (
    <>
      <Header setCartItem={setCartItem} cartItem={cartItem}/>
      <MainComponent cartItem={cartItem} setCartItem={setCartItem}/>
      <Footer />
    </>
  )
}