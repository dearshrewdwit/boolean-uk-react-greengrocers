import CartItem from "./CartItem";

export default function Cart({itemsInCart, setItemsInCart, total, setTotal}) {

  return (
     
    <>
    {itemsInCart &&
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {itemsInCart.map((e) => (
              <CartItem key={e.id +"-cart"} itemsInCart={itemsInCart} item={e} setItemsInCart={setItemsInCart} total={total} setTotal={setTotal}/>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£ ${total.toFixed(2)}`}</span>
          </div>
        </div>
      </main>
    }
    </>
  );
}
