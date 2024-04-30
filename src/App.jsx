import './styles/reset.css'
import './styles/index.css'

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { useState } from 'react'

export default function App() {
  const [basket, setBasket] = useState([])
  return (
    <>
      <Header setBasket={setBasket} basket={basket}></Header>
      <MainContent basket={basket} setBasket={setBasket}></MainContent>
      <Footer></Footer>
    </>
  )
}
