import { useState } from 'react'
import initialStoreItems from './store-items'
import Filtering from './Filtering'
import Details from './Details'


export default function Header({cartItem, setCartItem, priceUpdate}) {
    const [storeItem, setStoreItem] = useState(initialStoreItems)
    const [seeDetails, setSeeDetails] = useState(false)
    const [itemSelected, setItemSelected] = useState({})

  

    // const handClick = () => setSeeDetails(!seeDetails)

    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <Filtering 
        setStoreItem = {setStoreItem}
        />

        {seeDetails === true && 
        <Details 
        itemSelected={itemSelected} 
        seeDetails={seeDetails}
        setSeeDetails={setSeeDetails}/>}
        
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
                        {/* <div className={seeDetails ? 'store-item-details' : 'store-item-details hidden'}>
                            <p>{capitalise(item.name)}</p>
                            <p>£ {item.price}</p>
                        </div> */}
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
      </header>
    )
}