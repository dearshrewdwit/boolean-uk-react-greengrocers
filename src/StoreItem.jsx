export default function StoreItem({ item, addToCart }) {
    return (
        <li>
        <div className='store--item-icon'>
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button onClick={() => addToCart({...item, quantity : 1})}>Add to Cart</button>
            </li>
    )
}