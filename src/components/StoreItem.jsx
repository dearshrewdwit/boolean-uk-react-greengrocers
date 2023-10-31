function StoreItem({item}) {

    return (
            <li>
            <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button>Add to cart</button>
            </li>
    )
}
export default StoreItem