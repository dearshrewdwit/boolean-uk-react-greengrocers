
function StoreItem({ item, setCart }) {
    const addButton = () => {
        setCart(item)
    }

    return (
        <>
        <li>
            <div className="store--item-icon">
                <img src={`../../public/assets/icons/${item.id}.svg`} alt={item.name}/>
            </div>
            <button onClick={addButton}>Add to cart</button>
        </li>

        </>
  );
}

export default StoreItem;