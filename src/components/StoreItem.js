import {useState} from'react'

function StoreItem ({item, addCartItem}) {

  const [details, setDetails] = useState(false)
  console.log(details)
    
    return (
      <>
        <li key={item.id}>
          <div class="store--item-icon">
            <img onClick={()=> setDetails(!details)}src={"/assets/icons/" + item.id + ".svg"} alt={item.name} />
          </div>
          <button onClick={()=> addCartItem(item) }>Add to cart</button>
          {details === true &&
        <ul className="details">
          <li>{item.name}</li>
          <li>{'£' + item.price}</li>
          </ul>}
        </li>
        </>
      )
}
export default StoreItem