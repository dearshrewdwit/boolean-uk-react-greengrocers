import { useState } from 'react'
import initialStoreItems from './store-items'
import Filtering from './Filtering'
import Details from './Details'
import StoreList from './StoreList'


export default function Header({cartItem, setCartItem, priceUpdate}) {
    const [storeItem, setStoreItem] = useState(initialStoreItems)
    const [seeDetails, setSeeDetails] = useState(false)
    const [itemSelected, setItemSelected] = useState({})

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

        <StoreList 
        storeItem={storeItem}
        seeDetails={seeDetails}
        setSeeDetails={setSeeDetails}
        setItemSelected={setItemSelected}
        cartItem={cartItem}
        setCartItem={setCartItem}
        priceUpdate={priceUpdate}
        />
        </header>
    )
}