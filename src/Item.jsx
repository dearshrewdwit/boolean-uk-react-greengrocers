export default function Item({ item , addCartItem}) {
    return (
        <li>
            <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name }/>
            </div>
            <button onClick={() => addCartItem(item)}>Add to cart</button>
        </li>
    )
}
