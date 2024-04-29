import { useState } from "react";
import Cart from "./Cart";
import HeaderContent from "./HeaderContent";
import StoreItem from "./StoreItem";
import CartItem from "./CartItem";

export default function Content(initialStoreItems){
  // console.log(initialStoreItems.items)
  const [item, setItem] = useState({
    itemName : '',
    quantity : 0,
    idName : ''
  })

  const handleclick = (e) => {
    const { id , value} = e.target
  
    setItem({
      ...item,
      itemName : value,
      quantity : +1,
      idName : id
    })
  }
  return (
    <>
      <HeaderContent>
        <StoreItem initialStoreItems = { initialStoreItems } onClick = {handleclick}  />
      </HeaderContent>

      <Cart>
        <CartItem initialStoreItems = {initialStoreItems } items = {item} />
      </Cart>

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