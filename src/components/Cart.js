import CartItem from "./CartItem";
import Total from "./Total";

export default function Cart({cartItems, addOneToQuantity, removeOneQuantity}) {

    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {
                        cartItems.map((item, index) => {
                            return (
                                <CartItem key={index} item={item} removeOneQuantity={removeOneQuantity} addOneToQuantity={addOneToQuantity}/>
                            )
                        })
                    }
                </ul>
            </div>
            <Total cartItems={cartItems}/>
        </main>
    )
}