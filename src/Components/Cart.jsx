import CartItem from './CartItem';

function Cart({cart, setCart}) {
    
    const totalCount = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.count;
        });
        return total.toFixed(2);
    };

    return (
        <>
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {cart.map((item) => {
                        return <CartItem item={item} cart={cart} setCart={setCart} key={item.id}/>
                    })}
                </ul>
            </div>
            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className="total-number">£{totalCount()}</span>
                </div>
            </div>
        </main>
        </>
    )
}

export default Cart;