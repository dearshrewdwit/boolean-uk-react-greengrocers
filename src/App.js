import './styles/reset.css'
import './styles/index.css'

import Store from './Store'
import Cart from './Cart'
import Footer from './Footer'

import initialStoreItems from './store-items'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35,
  (need to add the quantity prop)
}

What should a cart item look like? 🤔

It needs to have a qunatity prop just like how we added one in vanilla
but how do I do that !!! :(
*/

console.log(initialStoreItems)

export default function App() {
  // Setup state here...

  return (
    <>
      <Store />
      <Cart />
      <Footer />

    </>
  )
}
