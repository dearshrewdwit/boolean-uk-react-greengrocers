import { SetStateAction } from 'react'
import { CartItemType } from './App'
import { StoreItemType } from './store-items'
import StoreItem from './StoreItem'

export type StoreProps = {
    cartItems: CartItemType[]
    setCartItems: React.Dispatch<SetStateAction<CartItemType[]>>
}

type StoreListProps = {
    storeItems: StoreItemType[]
} & StoreProps

export default function StoreList({
    storeItems,
    cartItems,
    setCartItems,
}: StoreListProps) {
    return (
        <header id='store'>
            <h1>Greengrocers</h1>
            <ul className='item-list store--item-list'>
                {storeItems.map((storeItem) => (
                    <StoreItem
                        key={storeItem.id}
                        storeItem={storeItem}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                ))}
            </ul>
        </header>
    )
}
