import Filter from "./Filter";
import Sort from "./Sort";

export default function Header({ storeItems, cart, setCart, setFilteredItems, filteredItems }) {
    //function which updates cart whenever a user clicks "Add to Basket":
  function addToCart(item) {
    console.log("selected item", item);

    //if item is already in cart, just update the items quantity. Else add item to cart:
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      itemInCart.quantity = itemInCart.quantity + 1;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          description: item.description,
          type: item.type,
        },
      ]);
    }
  }

  return (
    //Displaying store items list:
    <header id="store">
      <h1>Greengrocers</h1>
      <Filter storeItems={storeItems} setFilteredItems={setFilteredItems} />
      <Sort
        storeItems={storeItems}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
      />
      <ul className="item-list store--item-list">
        {filteredItems.map((item, index) => (
          <li key={index}>
            <div className="store--item-icon">
              <img src={"assets/icons/" + item.id + ".svg"} alt={item.name} />
            </div>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
