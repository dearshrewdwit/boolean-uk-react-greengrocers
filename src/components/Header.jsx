import { useState } from "react";

const Header = ({ store, cart, setCart }) => {
    const [filtered, setFiltered] = useState(store);

    const addToCart = (item) => {
        item.quantity++;

        const duplicate = cart.some(obj => { return obj.id == item.id });

        duplicate ? setCart([...cart]) : (setCart([...cart, item]));
    };

    const filter = () => {
      const filter = document.querySelector("#filter");
      const option = filter.value;

      const filterByFruit = store.filter(item => item.type === "fruit");
      const filterByVeg = store.filter(item => item.type === "veg");

      option === "fruit" ? setFiltered(filterByFruit)
      : option === "veg" ? setFiltered(filterByVeg)
      : setFiltered(store);
    };

    return (
    <>
    <header id="store">
    <h1>Greengrocers</h1>
    <select name="filter" id="filter" onChange={() => filter()}>
      <option value="filter">All</option>
      <option value="fruit">Fruits</option>
      <option value="veg">Vegetables</option>
    </select>
    <ul className="item-list store--item-list">
      {filtered.map(item => 
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