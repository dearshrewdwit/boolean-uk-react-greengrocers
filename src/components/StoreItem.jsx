import { calculator } from "../../utilities/functions";
import { addItemToCart } from "../../utilities/functions";

export default function StoreItem({itemsInCart, item, items, setItemsInCart, total, setTotal}) {

  return (
    <>
     {!item ? <p>loading...</p> :
            <li>
            <div className="store--item-icon">
              <img
                src={`../public/assets/icons/${item.id}.svg `}
                alt={item.name}
              />
            </div>
            <button 
              value={item.name}
              onClick={event => { 
                addItemToCart(event, itemsInCart, items,setItemsInCart)
                calculator(itemsInCart, total, setTotal)
              }}
            >Add to cart</button>
          </li>
      }
    </>
  );
}
