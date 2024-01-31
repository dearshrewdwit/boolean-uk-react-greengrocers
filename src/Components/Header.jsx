import StoreItem from "./StoreItem";
import initialStoreItems from '../store-items'

function Header({ items, setCart }) {
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map((e) => {
            console.log(e)
            return <StoreItem item={e} key={e.id}/>
          })}
        </ul>
      </header>
    </>
  );
}

export default Header;