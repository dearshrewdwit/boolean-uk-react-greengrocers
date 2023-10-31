import CartItem from "./CartItem";

const Main = ({ cart, setCart, total }) => {
    const addBtn = (item) => {
        item.quantity++;
        setCart([...cart])
    };

    const minusBtn = (item) => {
        item.quantity--;

        if (item.quantity === 0) {
            const idx = cart.indexOf(item)
            if (idx > -1)  cart.splice(idx, 1)
        };
    
        setCart([...cart])
    };

    return (
    <>
    <main id="cart">
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        <CartItem cart={cart} addBtn={addBtn} minusBtn={minusBtn}/>
      </ul>
    </div>

    <div className="total-section">
        <div>
            <h3>Total</h3>
        </div>
        <div>
            <span className="total-number">{`£${total.toFixed(2)}`}</span>
        </div>
    </div>
    </main>
    </>
    )
}

export default Main