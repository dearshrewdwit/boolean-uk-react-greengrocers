/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import Price from "./Price";

export default function MainContent({ cartList, setCartList }) {
    return (
        <main id="cart">
            <h2>Your Cart</h2>

            <CartItem
                cartList={cartList}
                setCartList={setCartList}
            />

            <Price cartList={cartList} />
        </main>
    )
}