/* eslint-disable react/prop-types */
import StoreItem from "./StoreItem";

export default function Header({store, addToCart}) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {store.map((storeItem, index) => {
            return <StoreItem storeItem={storeItem} key={index} addToCart={addToCart}/>
        })}
      </ul>
    </header>
  );
}