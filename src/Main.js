import Price from './Price'
import Cart from './Cart'

export default function Main({cartItem, setCartItem, priceUpdate, totalPrice, setTotalPrice}) {

    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <Cart 
            cartItem={cartItem}
            setCartItem={setCartItem}
            priceUpdate={priceUpdate}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            />
            <Price 
            totalPrice={totalPrice}
            />
        </main>
    )
}