import {Icon} from './Icon'

export const StoreItem = props => {
const item = props.item
return <li key={item.id}>
        <Icon className="store--item-icon" id={item.id} name ={item.name}/>
        <button onClick={() => props.addItem(item)}>Add to cart</button>
       </li>
}