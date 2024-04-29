import initialStoreItems from './store-items'

/* eslint-disable react/prop-types */
export default function StoreItem({ cartList, setCartList }) {
    const handleClick = (item) => {        
        if (cartList.find(cartItem => cartItem.id === item.id)) {
            setCartList(prevCartList => prevCartList.map(cartItem => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ))
        } else {
            setCartList(prevCartList => [...prevCartList, { ...item, quantity: 1 }])
        }
    }

    return (
        <ul className="item-list store--item-list">
            {initialStoreItems.map((item) => (
                <li key={item.id}>
                    <div className="store--item-icon">
                        <img 
                        src={`/assets/icons/${item.id}.svg`}
                        alt={item.name} 
                        />
                    </div>

                    <button onClick={() => handleClick(item)}>Add to cart</button>
                </li>
            ))}
        </ul>
    )
}