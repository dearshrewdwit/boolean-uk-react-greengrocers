import './styles/reset.css'
import './styles/index.css'

import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import { useState } from 'react'

export default function App() {
  const [cartList, setCartList] = useState([])

  return (
    <>
      <Header 
        cartList={cartList}
        setCartList={setCartList}
      />

      <MainContent
        cartList={cartList}  
        setCartList={setCartList}
      />

      <Footer />
    </>
  )
}