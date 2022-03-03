import { useState } from "react"
import initialStoreItems from '../store-items'

const StoreItem = props => {
    const [storeItems, setStoreItems] = useState(initialStoreItems)

    const addCartItem = item => {
        for (const inCart of props.cartItems) {
            if (inCart.id === item.id) {
                inCart.quantity++
                return
            }
        }
        const itemsToCart = {
            id: item.id,
            name: item.name,
            basePrice: +item.price,
            totalPrice: +item.price,
            quantity: 1,
            type: item.type
        }
        props.setCartItems([...props.cartItems, itemsToCart])

    }

    const displayFruit = () => {
        const fruits = storeItems.filter(x => x.type === 'Fruit')
        setStoreItems(fruits)
    }
    const displayVegetables = () => {
        const vegetables = storeItems.filter(x => x.type === 'Vegetable')
        setStoreItems(vegetables)
    }
    const resetFilter = () => {
        setStoreItems(initialStoreItems)
    }

    const alphabeticalAToZ = sort => {
        const sorted = storeItems.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1
            return 0
        })
        return sorted
    }

    const alphabeticalZToA = sort => {
        const sorted = storeItems.sort((a, b) => {
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return -1
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return 1
            return 0
        })
        return sorted
    }

    const sort = (sort) => {
        if (sort === 'A-Z') {
            const sorted = alphabeticalAToZ(sort)
            console.log('A-Z', sorted)
            setStoreItems(alphabeticalAToZ(sort))
        }
        if (sort === 'Z-A') {
            const sorted = alphabeticalZToA(sort)
            console.log('Z-A', sorted)
            setStoreItems(alphabeticalZToA(sort))
        }
    }

    return <div>
        <section>
            <button className='filter-type' onClick={(e) => { displayFruit() }}>Fruits</button>
            <button className='filter-type' onClick={(e) => { displayVegetables() }}>Vegetables</button>
            <button className='filter-type' onClick={(e) => { resetFilter() }}>Reset</button>

            <select name="sort" className="filter-type" onChange={(e) => { sort(e.target.value) }} >
                <option value="">Sort items by...</option>
                <option value="A-Z" >A - Z</option>
                <option value="Z-A">Z to A</option>
                <option value="price-hightolow">Price high to low</option>
                <option value="price-lowtohigh">Price low to high</option>
            </select>


        </section>
        <ul className="item-list store--item-list">
            {storeItems.map(item => <li key={item.id}>
                <div class="store--item-icon">
                    <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <button onClick={(e) => addCartItem(item)}>Add to cart</button>
            </li>
            )}
        </ul>
    </div>
}
export default StoreItem