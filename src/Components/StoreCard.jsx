export default function StoreCard ({ initialStoreItems } ) {
    return (
        initialStoreItems.map((item, index) => {
            return ( 
                <li key={index}>
                    <div className="store--item-icon">
                        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                    </div>
                    <button>Add to cart</button>
                </li>
            )
        })
    )
}


