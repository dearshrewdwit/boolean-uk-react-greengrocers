/* eslint-disable react/prop-types */
export default function CartItem({ cartList, setCartList }) {
    const increment = (item) => {
        setCartList(prevCartList => prevCartList.map(cartItem => 
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ))
    }

    const decrement = (item) => {
        if (item.quantity > 1) {
            setCartList(prevCartList => prevCartList.map(cartItem => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            ))
        } else {
            setCartList(prevCartList => prevCartList.filter(cartItem => cartItem.id !== item.id))
        }
    }
    
    return (
        <div className="cart--item-list-container">
            {cartList.map((item) => (
                <ul key={item.id} className="item-list cart--item-list">
                    <li>
                        <img
                            className="cart--item-icon"
                            src={`/assets/icons/${item.id}.svg`}
                            alt={item.name}
                        />
                        <p>{item.name}</p>
                        <button onClick={() => decrement(item)} className="quantity-btn remove-btn center">-</button>
                        <span className="quantity-text center">{item.quantity}</span>
                        <button onClick={() => increment(item)} className="quantity-btn add-btn center">+</button>
                    </li>
                </ul>
            ))}
        </div>
    )
}