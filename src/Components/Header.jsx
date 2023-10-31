export default function Header({items, addToCart}) {
    return (
        
        <header id="store">
          <h1>Greengrocers</h1>
          <ul className="item-list store--item-list">
            {items.map((item) => (
              <li key={item.id}>
                <div className="store--item-icon">
                  <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <button onClick={() => addToCart(item)}>Add to cart</button>
                <p>{item.name.toUpperCase()}</p>
                <p>${item.price.toFixed(2)}</p>
              </li>
            ))}
  
          </ul>
        </header>
    )
}