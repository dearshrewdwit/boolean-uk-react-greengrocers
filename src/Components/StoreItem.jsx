function StoreItem({ item, cart, setCart }) {
    const addItem = () => {
        const inCart = cart.find((e) => e.id === item.id)
        if (inCart) {
            inCart.count++
            setCart([...cart])
        } else {
            setCart([...cart, {...item, count: 1 }])
        }
    }

    return (
        <>
        <li>
            <div className="store--item-icon">
                <img src={`../../public/assets/icons/${item.id}.svg`} alt={item.name}/>
            </div>
            <button onClick={addItem}>Add to cart</button>
        </li>

        </>
  );
}

export default StoreItem;