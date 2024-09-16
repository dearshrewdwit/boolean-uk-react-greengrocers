import { useState } from "react";
import Cart from "./Cart";
import HeaderContent from "./HeaderContent";
import StoreItem from "./StoreItem";
import CartItem from "./CartItem";

export default function Content(initialStoreItems){

  
  const [items, setItems] = useState([{
    itemName : '',
    quantity : 0,
    idName : ''
  }])

  const [total, setTotal] = useState(0)
  const handleclick = (e) => {
    const { id , value, name} = e.target
    const plusOrMin = name !== 'negative-button' ? +1 : -1
    const existItem = items.find((item) => item.idName === id)
    console.log(existItem)
    if(plusOrMin === -1 && existItem.quantity === 1){
      setItems(items.filter(item => item.idName !== id))
      setTotal( total-0.35 )
      //if we remove a item and total becomes 0 then user will see '-0.00', so with the next line of code we wont have the problem
      total === 0 ? 0: total
    }else if (existItem){
      setItems(
        items.map(item => item.idName === id ? {
          ...item,
          quantity: item.quantity + plusOrMin
        } : item)
      )
      setTotal(plusOrMin !== -1 ? total+0.35 : total-0.35)
    } else {
      setItems([...items,{
        itemName:value,
        quantity:1,
        idName:id
      }])
      setTotal(total+0.35)
    }
  }
  
  return (
    <>
      <HeaderContent>
        <StoreItem initialStoreItems = { initialStoreItems } onClick = {handleclick}  />
      </HeaderContent>

       <Cart onClick={handleclick} items={items} total={total}/>
  
        
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}