import AddToCart from "./AddToCart"

export default function StoreItem({ products, cartProds, setCartProds }) {


    return (
        products.map(product => (
        <li key={product.id}>
            <div className="store--item-icon">
                <img width={94} src={`/assets/icons/${product.id}.svg`} alt={product.name} />
            </div>
            <div className="store--item-details">

                <p>Price: ${product.price}</p>
                <button style={{marginTop: '10px' }}>Product Info</button>
                <AddToCart product={product} cartProds={cartProds} setCartProds={setCartProds} />
            </div>
        </li>
        ))
    )
}
