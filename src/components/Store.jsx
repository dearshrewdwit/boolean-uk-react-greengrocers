import initialStoreItems from '../store-items'
import { useState } from 'react'
import StoreItem from './StoreItem'

export default function Store({ cartItems, setCartItems }) {
    const [filter, setFilter] = useState('all')
    const [sorting, setSorting] = useState('name')
    const [storeItems, setStoreItems] = useState(initialStoreItems)

    const addToCart = (item) => {
        if (cartItems.some((cartItem) => cartItem.id === item.id)) {
            setCartItems(cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            }))
        }
        else {
            setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
    }

    const sortStore = (e) => {
        setSorting(e.target.value)
        setStoreItems([...storeItems].sort((a, b) => {
            if (e.target.value === 'price-desc') {
                return b.price - a.price
            }
            else if (e.target.value === 'price-asc') {
                return a.price - b.price
            }
            else if (e.target.value === 'name') {
                return a.name.localeCompare(b.name)
            }
        }))
    }

    const filterStore = (item) => {
        if (filter === 'all') {
            return true
        }
        return item.type === filter
    }

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <select name="filter" id="filter" onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="berry">Berries</option>
            </select>
            <select name="sort" id="sort" onChange={(e) => sortStore(e)}>
                <option value="">-</option>
                <option value="name">Name</option>
                <option value="price-desc">Price Desc</option>
                <option value="price-asc">Price Asc</option>
            </select>
            <ul className="item-list store--item-list">
                {
                    filter !== 'all'
                        ?
                        storeItems.filter(filterStore).map((item) => {
                            return (<StoreItem key={item.id} item={item} addToCart={addToCart} />)
                        })
                        :
                        storeItems.map((item) => { return (<StoreItem key={item.id} item={item} addToCart={addToCart} />) })
                }
            </ul>
        </header>
    )
}