import {Icon} from './Icon'
import {succ, pred} from './helperfunctions'

export const CartItem = props => {
    const item = props.item
    return <li key={item.id}>
    <Icon className={"cart--item-icon"} id={item.id} name ={item.name}/>
    <p>{item.name}</p>
    <button className="quantity-btn remove-btn center" onClick={() => props.changeQuantity(item.id,pred)}>-</button>
    <span className="quantity-text center">{item.quantity}</span>
    <button className="quantity-btn add-btn center" onClick={() => props.changeQuantity(item.id,succ)}>+</button>
  </li>
  
}