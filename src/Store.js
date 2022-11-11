import { useState } from "react"
import storeItems from "./store-items"

function Store (props) {
    // {} = props
    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
         <li>
            <div>
            <img src="/assets/icons/001-beetroot.svg" alt="beetroot" />
            </div>
            <button>Add to cart</button>
         </li>
        </ul>
      </header>

    )
}

export default Store

// Import state @ the start 
// Import the data for the items 
// need a storeItemsa and setStoreItems in state 
