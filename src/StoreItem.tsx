import { CartItemType } from './App'
import { StoreItemType } from './store-items'
import { StoreProps } from './StoreList'

type StoreItemProps = {
    storeItem: StoreItemType
} & StoreProps

export default function StoreItem({
    storeItem,
    cartItems,
    setCartItems,
}: StoreItemProps) {
    const addToCart = (): void => {
        const matchingItem = cartItems.find((cartItem: CartItemType) =>
            cartItem.id.match(storeItem.id)
        )
        if (!matchingItem && !cartItems) {
            setCartItems([
                {
                    ...storeItem,
                    count: 1,
                },
            ])
        } else if (!matchingItem) {
            setCartItems([
                ...cartItems,
                {
                    ...storeItem,
                    count: 1,
                },
            ])
        } else {
            setCartItems(
                cartItems.map((cartItem) => {
                    if (cartItem.id === storeItem.id) {
                        return {
                            ...storeItem,
                            count: cartItem.count + 1,
                        }
                    } else {
                        return cartItem
                    }
                })
            )
        }
    }

    return (
        <li>
            <div className='store--item-icon'>
                <img
                    src={`/assets/icons/${storeItem.id}.svg`}
                    alt={storeItem.name}
                />
            </div>
            <button onClick={() => addToCart()}>Add to cart</button>
        </li>
    )
}
