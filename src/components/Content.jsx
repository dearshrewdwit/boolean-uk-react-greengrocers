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
  const [newitem, setNewItem] = useState({
    itemName : '',
    quantity : 0,
    idName : ''
  })
  const handleclick = (e) => {
    const { id , value} = e.target
    console.log(e.target)
    setNewItem({
      ...newitem,
      itemName:value,
      quantity:1,
      idName:id
    })
    console.log(newitem)
    let i = 0
    items.map((item) => {
     if (item.idName === id){
      i++
      item.quantity++
    }})
    if(i<1){
      setItems([
        ...items,{
          itemName : value,
          quantity: 1,
          idName : id
    }])
    }
    
  }
  console.log(items)
  return (
    <>
      <HeaderContent>
        <StoreItem initialStoreItems = { initialStoreItems } onClick = {handleclick}  />
      </HeaderContent>

        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
              
            <ul className="item-list cart--item-list">
              {
                items.map((item, index) =>
                  <>
                  {
                    item.idName !== '' && <li key={index}>
                    <img
                      className="cart--item-icon"
                      src={`assets/icons/${item.idName}.svg`}
                      alt={item.idName}
                    />
                    <p>{item.itemName}</p>
                    <button className="quantity-btn remove-btn center">-</button>
                    <span className="quantity-text center">{item.quantity}</span>
                    <button className="quantity-btn add-btn center">+</button>
                  </li>
                  }
                  
                  </>
                )
              }
              </ul>
              
            </div>
            <div className="total-section">
              <div>
                <h3>Total</h3>
              </div>
              <div>
                <span className="total-number">£0.00</span>
              </div>
            </div>
          </main>
  
        
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