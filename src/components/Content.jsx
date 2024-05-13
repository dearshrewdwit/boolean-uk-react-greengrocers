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

  const handleclick = (e) => {
    const { id , value, name} = e.target
    console.log(e.target)
    console.log(name)
    const addormin = name !== 'negative-button' ? +1 : -1
    console.log('test', addormin)
    const existItem = items.find((item) => item.idName === id)
    console.log(existItem)
     if (existItem){
      setItems(
        items.map(item => item.idName === id ? {
          ...item,
          quantity: item.quantity + addormin
        } : item)
      )
    } else {
      setItems([...items,{
        itemName:value,
        quantity:1,
        idName:id
      }])
    }
  }
  return (
    <>
      <HeaderContent>
        <StoreItem initialStoreItems = { initialStoreItems } onClick = {handleclick}  />
      </HeaderContent>

       <Cart onClick={handleclick} items={items}/>
  
        
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