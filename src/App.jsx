import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";

import { useState } from "react";
import Product from "./components/Product";
import CartItem from "./components/CartItem";

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

export default function App() {
    const [store, setStore] = useState(initialStoreItems);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const itemInCart = cart.find((cartItem) => cartItem.id === product.id);

        itemInCart
            ? setCart(
                  cart.map((item) =>
                      item.id === itemInCart.id
                          ? { ...itemInCart, count: ++itemInCart.count }
                          : item
                  )
              )
            : setCart([...cart, { ...product, count: 1 }]);
    };

    const decreaseCount = (product) => {
        product.count === 1
            ? setCart(cart.filter((item) => item.id !== product.id))
            : setCart(
                  cart.map((item) =>
                      item.id === product.id
                          ? { ...product, count: --product.count }
                          : item
                  )
              );
    };

    const increaseCount = (product) => {
        setCart(
            cart.map((item) =>
                item.id === product.id
                    ? { ...product, count: ++product.count }
                    : item
            )
        );
    };

    return (
        <>
            <header id="store">
                <h1>Greengrocers</h1>
                <ul className="item-list store--item-list">
                    {store.map((item, index) => (
                        <Product
                            data={item}
                            key={index}
                            addProduct={addProduct}
                        />
                    ))}
                </ul>
            </header>
            <main id="cart">
                <h2>Your Cart</h2>
                <div className="cart--item-list-container">
                    <ul className="item-list cart--item-list">
                        {cart.map((item, index) => (
                            <CartItem
                                data={item}
                                key={index}
                                decreaseCount={decreaseCount}
                                increaseCount={increaseCount}
                            />
                        ))}
                    </ul>
                </div>
                <div className="total-section">
                    <div>
                        <h3>Total</h3>
                    </div>
                    <div>
                        <span className="total-number">£0.00</span>
                    </div>
                </div>
            </main>
            <div>
                Icons made by
                <a
                    href="https://www.flaticon.com/authors/icongeek26"
                    title="Icongeek26"
                >
                    Icongeek26
                </a>
                from
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </>
    );
}
