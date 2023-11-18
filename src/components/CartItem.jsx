import { minusButton, plusButton } from "../../utilities/functions";
import { calculator } from "../../utilities/functions";

export default function CartItem({itemsInCart, item, setItemsInCart, total, setTotal}) {

  return (
    <>
     {!item ? <p>loading...</p> :
      <li>
        <img
          className="cart--item-icon"
          src={`../public/assets/icons/${item.id}.svg `}
          alt={item.name}
        />
        <p>{item.name}</p>
        <button
          className="quantity-btn remove-btn center"
          onClick={() => {
            minusButton(item, setItemsInCart, itemsInCart);
            calculator(itemsInCart ,total, setTotal);
          }}
        >
          -
        </button>
        <span className="quantity-text center">{item.quantity}</span>
        <button
          className="quantity-btn add-btn center"
          onClick={() => {
            plusButton(item, setItemsInCart, itemsInCart);
            calculator(itemsInCart ,total, setTotal);
          }}
        >
          +
        </button>
      </li>
      }
    </>
  );
}
