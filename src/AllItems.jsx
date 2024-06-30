import initialStoreItems from "./store-items";

export default function AllItems(props) {
  const cartItems = props.cartItems;
  return initialStoreItems.map((item) => {
    return (
      <li key={item.id}>
        <div className="store--item-icon">
          <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
        </div>
        <button
          onClick={() => {
            props.increaseCartItem(item);
            props.setCartItems([...cartItems, item]);
            console.log(item);
          }}
        >
          Add to cart
        </button>
      </li>
    );
  });
}
