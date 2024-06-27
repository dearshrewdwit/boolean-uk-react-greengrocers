import { SetStateAction } from 'react'
import { CartItemType } from './App'
import CartItem from './CartItem'

export type CartListProps = {
    cartItems: CartItemType[]
    setCartItems: React.Dispatch<SetStateAction<CartItemType[]>>
}

export default function CartList({ cartItems, setCartItems }: CartListProps) {
    const calculateTotal = () => {
        let totalAmount = 0
        for (let cartItem of cartItems) {
            totalAmount += cartItem.count * cartItem.price
        }
        return totalAmount.toFixed(2)
    }

    return (
        <main id='cart'>
            <h2>Your Cart</h2>
            <div className='cart--item-list-container'>
                <ul className='item-list cart--item-list'>
                    {cartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    ))}
                </ul>
            </div>
            <div className='total-section'>
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className='total-number'>{`£${calculateTotal()}`}</span>
                </div>
            </div>
        </main>
    )
}
