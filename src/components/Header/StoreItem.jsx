/* eslint-disable react/prop-types */
export default function StoreItem({item, addItemToCart, showItemDetails}) {
  const details = (
    <div>
      <div>Name: {item.name}</div>
      <div>Price: ${(item.price/100).toFixed(2)}</div>
    </div>
  )
  
  return (
    <li>
      <div className="store--item-icon">
        <img onClick={() => showItemDetails(item)} src={`assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => addItemToCart(item)}>Add to cart</button>
      {item.showDetails ? details : null}
    </li>
  );
}
