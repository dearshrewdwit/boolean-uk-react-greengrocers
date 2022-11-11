import {useState} from'react'
import Details from './Details.js'

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
          {<Details details={details} item={item}/>}
        </li>
        </>
      )
}
export default StoreItem