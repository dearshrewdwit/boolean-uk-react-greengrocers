const ItemDetails = ({item, setIsItemSelected, addItemToCart}) => {
    return (
        <div className='details'>
            <button id="close" onClick={()=>setIsItemSelected(false)}>X</button>
            <h2>{item.name}</h2>
            <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            <div className="info">
                <p>Type: {item.type}</p>
                <p>Price: {item.price}</p>
            </div>
            <button onClick={()=>addItemToCart(item)}>Add to cart</button>
        </div>
    )
}

export default ItemDetails