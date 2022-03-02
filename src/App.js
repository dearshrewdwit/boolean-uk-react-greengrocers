import React, { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import Cart from './components/Cart'
import Store from './components/Store'

const App = () => {
  return (
    <>
      <Store />
      <Cart />
    </>
  )
}

export default App
