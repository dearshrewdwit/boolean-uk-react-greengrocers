export default function StoreList({storeItem, seeDetails, setSeeDetails, setItemSelected, cartItem, setCartItem, priceUpdate}) {

    return (
        <ul className="item-list store--item-list">
          {storeItem.map((item, index) => {
            return (
                <li key={index}>
                    <div className="store--item-icon"
                    onClick={() => {
                        setSeeDetails(!seeDetails)
                        setItemSelected(item)
                    }}>
                        <img 
                        src={`/assets/icons/${item.id}.svg`} 
                        alt={item.name}
                        />
                    </div>
                    <button
                    onClick={() => {
                        // We check the cart to see if this item is already there.
                        const checker = cartItem.find((element) => {
                            return element.name == item.name
                        })
                        // If undefined (none found in the .find above)
                        // create new object, spread old obj and add quantity value.
                        // create new array, sread old arr and add new object.
                        if(checker === undefined){
                            const newCartItem = {...item, quantity: 1}
                            const newCart = [...cartItem, newCartItem]
                            setCartItem(newCart)
                        } else {
                            // Else we just increase the quantity of the found item
                            // from the .find above.
                            // Create a new array, and spread the old array into it because
                            // we have changed values inside it and need a re-render.
                            checker.quantity++
                            const newCart = [...cartItem]
                            setCartItem(newCart)
                        }
                        priceUpdate(item.price)
                    }}
                    >Add to cart</button>
                </li>
            )
          })}
        </ul>
    )
}