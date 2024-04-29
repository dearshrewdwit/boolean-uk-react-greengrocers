import { useState } from "react"

function StoreItemLi({ setCartItem, cartItem, filteredItems}) {
    const [details, setDetails] = useState('')

    function handleClick(item) {
        const foundItem = cartItem.find(product => product.id === item.id)

        if (foundItem) {
                foundItem.quantity++
                setCartItem([
                    ...cartItem
                ])

          } else {
                const productToAdd = { ...item }
                productToAdd.quantity = 1
                setCartItem([
                    ...cartItem,
                    productToAdd
                ])
          }

    }

    function handleDetails(item) {
        setDetails(item)
    }

    return filteredItems.map((item, index) => {
        return (
            <li key={index}>
                <div className="store--item-icon">
                    <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                {details === item && <p className="details">{item.description}</p>}
                <button onClick={() => handleClick(item)}>Add to cart</button>
                <button onClick={() => handleDetails(item)}>Details</button>
            </li>
        )
    })
}

export default StoreItemLi