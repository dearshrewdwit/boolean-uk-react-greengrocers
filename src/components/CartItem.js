import { useContext } from 'react'
import { CartContext } from '../helper/CartContext'

const CartItem = () => {
  const addToCart = selectedItem => {
    const updatedCart = cart.map(item =>
      item === selectedItem
        ? { ...item, cartQuantity: item.cartQuantity + 1 }
        : item
    )
    setCart(updatedCart)
  }

  const removeFromCart = selectedItem => {
    if (selectedItem.cartQuantity > 1) {
      decreaseItemQuantity(selectedItem)
    } else {
      removeAllFromCart(selectedItem)
    }
  }

  const decreaseItemQuantity = selectedItem => {
    const updatedCart = cart.map(item =>
      item === selectedItem
        ? { ...item, cartQuantity: item.cartQuantity - 1 }
        : item
    )
    setCart(updatedCart)
  }

  const removeAllFromCart = selectedItem => {
    setCart(cart.filter(item => item !== selectedItem))
  }

  const { cart, setCart } = useContext(CartContext)
  return cart.map(item => (
    <li key={item.id}>
      <img
        className="cart--item-icon"
        src={`../assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => removeFromCart(item)}
      >
        -
      </button>
      <span className="quantity-text center">{item.cartQuantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => addToCart(item)}
      >
        +
      </button>
    </li>
  ))
}

export default CartItem
