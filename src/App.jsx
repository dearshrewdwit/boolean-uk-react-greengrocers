import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";

import { useState } from "react";
import Product from "./components/Product";
import CartItem from "./components/CartItem";

export default function App() {
    const [store, setStore] = useState(initialStoreItems);
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState("");

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
                <div className="store-tools">
                    <select
                        onChange={(e) => setFilter(e.target.value)}
                        name="filter"
                        id="store-fitler"
                    >
                        <option value="">No filter</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                    </select>

                    <select name="sort" id="store-sort">
                        <option value="">No sort</option>
                        <option value="price">By price</option>
                        <option value="name">By name</option>
                    </select>
                </div>
                <ul className="item-list store--item-list">
                    {store
                        .filter((item) =>
                            filter ? item.type === filter : item
                        )
                        .map((item, index) => (
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
                        <span className="total-number">
                            £
                            {cart
                                .map((item) => item.price * item.count)
                                .reduce((a, b) => a + b, 0)
                                .toFixed(2)}
                        </span>
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
