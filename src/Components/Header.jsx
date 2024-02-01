import StoreItem from "./StoreItem";
import initialStoreItems from '../store-items'

function Header({ setCart }) {
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map((e) => {
            return <StoreItem item={e} setCart={setCart} key={e.id}/>
          })}
        </ul>
      </header>
    </>
  );
}

export default Header;