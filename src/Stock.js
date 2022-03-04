import storeItems from "./store-items"
import {useState} from 'react'

export default function Stock(props) {

  const [newStockForm, setNewStockForm] = useState( {
    name: "",
    image: "",
    type: "",
    price: ""
  })

    const editStock = (item) => {
        props.addToStock(item)
        const updatedCart = props.cartItems.map(cartItem =>
            cartItem.name === item.name
              ? {
                  ...cartItem,
                  stockQuantity: cartItem.stockQuantity + 1
                }
              : cartItem)
        props.setCartItems(updatedCart)
    }


    // Example item
    // name: "orange",
    // image: `https://freesvg.org/img/Gerald_G_Simple_Fruit_(FF_Menu)_4.png`

    
    // handleInputChange(event) {
    //   const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
  
    //   this.setState({
    //     [name]: value
    //   });
    // }
    
    const addNewStoreItem = (e) => {
      e.preventDefault()
      console.log(e)
      const newItem = {
        id: `0${props.storeItems.length + 1}-orange`,
        name: 'orange',
        price: Number("0.35"),
        type: "fruit",
        stockQuantity: 1,
        image: 'https://freesvg.org/img/Gerald_G_Simple_Fruit_(FF_Menu)_4.png'
      }
      console.log(newItem)
      props.setStoreItems([...storeItems, newItem])
    }

    return (
        <div className="stock"> 
        <div>Add Items to Stock</div>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {props.storeItems.map(storeItem => {
                return <li>
                <img
                  class="cart--item-icon"
                  src={"image" in storeItem ? storeItem.image : `assets/icons/${storeItem.id}.svg`}
                  alt={storeItem.name}
                />
                <p>{storeItem.name}</p>
                <span class="quantity-text center">{storeItem.stockQuantity}</span>
                <button class="quantity-btn add-btn center" onClick={() => editStock(storeItem)}>+</button>
              </li>
            })}
          </ul>
        </div>
        <div>
        <form>
            <p>Add New Item to Stock</p>
            <label>Name</label>
            <input name="name" type="text"/><br/>
            <label>Image URL</label>
            <input name="image" type="text"/><br/>
            <label>Price</label>
            <input name="price"type="text"/><br/>
            <button type="submit" onClick={addNewStoreItem}>Submit</button>
        </form>
        </div>
      </div>
    )
  }
  