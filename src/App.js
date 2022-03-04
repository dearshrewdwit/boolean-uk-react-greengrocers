import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'
import Detail from './Detail'
import Purchase from './Purchase'
import Navbar from './Navbar'
import Stock from './Stock'

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  const [showingDetail, setShowingDetail] = useState(false)
  const [detailItem, setDetailItem] = useState({})
  const [purchasePage, setPurchasePage] = useState(false)
  const [storeOrStock, setStoreOrStock] = useState('store')

  const alreadyInCart = item => {
    return cartItems.find(cartItem => cartItem.name === item.name) !== undefined
  }

  const addToCart = item => {
    if (alreadyInCart(item)) {
      const updatedCart = cartItems.map(cartItem =>
        cartItem.name === item.name && cartItem.stockQuantity > 0
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              stockQuantity: cartItem.stockQuantity - 1
            }
          : cartItem
      )
      setCartItems(updatedCart)
    } else if (item.stockQuantity > 0) {
      const updatedCart2 = [
        ...cartItems,
        { ...item, quantity: 1, stockQuantity: item.stockQuantity - 1 }
      ]
      setCartItems(updatedCart2)
    }

    const updatedStock = storeItems.map(storeItem =>
      storeItem.name === item.name && storeItem.stockQuantity > 0
        ? { ...storeItem, stockQuantity: storeItem.stockQuantity - 1 }
        : storeItem
    )
    setStoreItems(updatedStock)
  }

  const removeFromCart = item => {
    const updatedCart = cartItems
      .map(cartItem =>
        cartItem.name === item.name
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              stockQuantity: cartItem.stockQuantity + 1
            }
          : cartItem
      )
      .filter(cartItem => cartItem.quantity !== 0)
    setCartItems(updatedCart)

    addToStock(item)
  }

  const addToStock = item => {
    const updatedStock = storeItems.map(storeItem =>
      storeItem.name === item.name
        ? { ...storeItem, stockQuantity: storeItem.stockQuantity + 1 }
        : storeItem
    )
    setStoreItems(updatedStock)
  }

  return (
    <div>
      <Navbar setStoreOrStock={setStoreOrStock} />
      {storeOrStock === 'stock' ? (
        <Stock
          storeItems={storeItems}
          setStoreItems={setStoreItems}
          addToStock={addToStock}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : (
        <div>
          {purchasePage ? (
            <Purchase
              setPurchasePage={setPurchasePage}
              setCartItems={setCartItems}
            />
          ) : (
            <div className={showingDetail ? 'display-detail' : 'display'}>
              <Header
                storeItems={storeItems}
                addToCart={addToCart}
                setShowingDetail={setShowingDetail}
                setDetailItem={setDetailItem}
              />
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                setPurchasePage={setPurchasePage}
              />
              <Footer />
              {showingDetail && (
                <Detail
                  addToCart={addToCart}
                  setShowingDetail={setShowingDetail}
                  detailItem={detailItem}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
