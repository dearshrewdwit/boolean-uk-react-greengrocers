import CartItem from "./CartItem";

const Main = ({ cart, setCart, total }) => {
    return (
    <>
    <main id="cart">
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        <CartItem cart={cart} setCart={setCart} />
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