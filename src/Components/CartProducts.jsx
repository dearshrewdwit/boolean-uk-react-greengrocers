export default function CartProducts({ cartProds, setCartProds }) {
    
    function handleClick(e, prod) {
        if (e.target.innerText === '+') {
            prod.qty++
        }
        if (e.target.innerText === '-') {
            prod.qty--
        }
        setCartProds([...cartProds])
    }

    return (
        cartProds.map((prod, index) => {
            return (
            <li key={index}>
            <img
                className="cart--item-icon"
                src={`/assets/icons/${prod.id}.svg`} alt={prod.name}     
            />
            <p>{prod.name}</p>
            <button className="quantity-btn remove-btn center" onClick={(e) => handleClick(e, prod)} >-</button>
            <span className="quantity-text center">1</span>
            <button className="quantity-btn add-btn center" onClick={(e) => handleClick(e, prod)}>+</button>
        </li>
            )
        })
    )
}