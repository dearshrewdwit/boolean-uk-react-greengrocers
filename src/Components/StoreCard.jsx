export default function StoreCard ({ initialStoreItems, addToCart, cart } ) {


    return (
        initialStoreItems.map((item, index) => {
            return ( 
                <li key={index}>
                    <div className="store--item-icon">
                        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                    </div>
                    <button onClick={() => addToCart([...cart, item])}>Add to cart</button>
                </li>
            )
        })
    )
}


