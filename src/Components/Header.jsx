/* eslint-disable react/prop-types */
import CartItem from './CartItems'

function Header({ addCartItem }) {

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                <CartItem addCartItem={addCartItem} />
            </ul>
        </header>
    )
}

export default Header