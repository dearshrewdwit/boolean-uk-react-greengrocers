const Header = ({ store, cart, setCart}) => {
    const addToCart = (item) => {
        item.quantity++;

        const duplicate = cart.some(obj => { return obj.id == item.id });

        duplicate ? setCart([...cart]) : (setCart([...cart, item]))
    };

    return (
    <>
    <header id="store">
    <h1>Greengrocers</h1>
    <ul className="item-list store--item-list">
      {store.map(item => 
        <li key={item.id}>
            <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            
            <button onClick={() => addToCart(item)}>Add to cart</button>
        </li>
      )}
    </ul>
    </header>
    </>
    )
}
export default Header