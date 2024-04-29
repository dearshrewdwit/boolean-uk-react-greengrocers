export default function StoreCard({ initialStoreItems, addToCart, cart }) {

function handleClick (item) {
    if (item.quantity) {
        item.quantity ++
    } else {
        item.quantity = 1
    }
    if (cart.includes(item)) {
        return
    }
    addToCart([...cart, item])
}

  return initialStoreItems.map((item, index) => {
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
