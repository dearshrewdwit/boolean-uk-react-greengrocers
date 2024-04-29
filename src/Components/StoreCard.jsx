export default function StoreCard({ initialStoreItems, addToCart, cart, filter }) {

function handleClick (item) {
    if (item.quantity) {
        item.quantity ++
    } else {
        item.quantity = 1
    }
    if (cart.includes(item)) {
        addToCart([...cart])
        return
    }
    addToCart([...cart, item])
}

let filteredItems;

if (filter !== 'all') {
    filteredItems = initialStoreItems.filter((item) => item.type === filter)
} else {
    filteredItems = initialStoreItems
}

  return filteredItems.map((item, index) => {
    return (
      <li key={index}>
        <div className="store--item-icon">
          <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
        </div>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </li>
    );
  });
}
