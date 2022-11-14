import initialStoreItems from "../store-items";
import StoreItem from "./StoreItem";

function StoreList({ cartItems, setCartItems }) {
  //function to add storeitem to cart

  return (
    <ul className="item-list store--item-list">
      {initialStoreItems.map((item) => {
        return (
          <StoreItem
            key={item.id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        );
      })}
    </ul>
  );
}
export default StoreList;
