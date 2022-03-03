import {useState} from 'react'
import {Icon} from './Icon'

export const StoreItem = props => {
const properNoun = word => word.substring(0,1).toUpperCase() + word.substring(1)
const [priceIsShown,toggleShowPrice] = useState(false)
const item = props.item
return <li key={item.id}>
        <Icon className="store--item-icon" id={item.id} name ={item.name} click={toggleShowPrice}/>
        <button onClick={() => props.addItem(item)}>{item.stock>0?"Add to cart":"Out of stock"}</button>
        {priceIsShown && <span className="price-tag">{`${properNoun(item.name)}: £${item.price.toFixed(2)}`}</span>}
       </li>
}