import { CartItemType } from './App'
import { CartListProps } from './CartList'

type CartItemProps = {
    cartItem: CartItemType
} & CartListProps

export default function CartItem({
    cartItem,
    cartItems,
    setCartItems,
}: CartItemProps) {
    const addToCount = () => {
        setCartItems(
            cartItems.map((cartItemFromState) => {
                if (cartItem.id === cartItemFromState.id) {
                    return {
                        ...cartItem,
                        count: cartItem.count + 1,
                    }
                } else {
                    return cartItemFromState
                }
            })
        )
    }

    const removeFromCount = () => {
        if (cartItem.count <= 1) {
            setCartItems(
                cartItems.filter(
                    (cartItemFromState) => cartItemFromState.id != cartItem.id
                )
            )
        } else {
            setCartItems(
                cartItems.map((cartItemFromState) => {
                    if (cartItem.id === cartItemFromState.id) {
                        return {
                            ...cartItem,
                            count: cartItem.count - 1,
                        }
                    } else {
                        return cartItemFromState
                    }
                })
            )
        }
    }

    return (
        <li>
            <img
                className='cart--item-icon'
                src={`assets/icons/${cartItem.id}.svg`}
                alt={cartItem.id}
            />
            <p>{cartItem.name[0].toUpperCase() + cartItem.name.slice(1)}</p>
            <button
                className='quantity-btn remove-btn center'
                onClick={removeFromCount}
            >
                -
            </button>
            <span className='quantity-text center'>{cartItem.count}</span>
            <button
                className='quantity-btn add-btn center'
                onClick={addToCount}
            >
                +
            </button>
        </li>
    )
}
