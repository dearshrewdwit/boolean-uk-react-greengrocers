/* eslint-disable react/prop-types */
export default function StoreItem({storeItem, index, addToCart}) {
    return (
        <li>
            <div className="store--item-icon" key={index}>
                <img src={`../../assets/icons/${storeItem.id}.svg`} alt={storeItem.name}/>
            </div>
            <button onClick={() => addToCart(storeItem)}>Add to cart</button>
        </li>
    )
}