import { useState } from "react"

export default function CartItem({ item, numItemsInCart, setNumItemsInCart }) {
    const [checkBtn, setCheckBtn] = useState('+')

    const handleClick = (event) => {
        setCheckBtn(event.target.textContent)
    }

    const updateCart = () => {
        if(checkBtn === '+') {
            setNumItemsInCart(numItemsInCart++)
        }
        else if(checkBtn === '-') {
            setNumItemsInCart(numItemsInCart--)
        }
        return numItemsInCart
    }

  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${item.name}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">{updateCart}</span>
      <button className="quantity-btn add-btn center" onClick={handleClick}>+</button>
    </li>
  );
}
