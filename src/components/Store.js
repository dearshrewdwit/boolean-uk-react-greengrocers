import initialStoreItems from '../store-items';
import StoreItem from './StoreItem';

function Store({ cartList, setCartList }) {
  return (
    <main id="store">
      <ul className="item-list store--item-list">
        {initialStoreItems.map((item, index) => {
          return (
            <StoreItem
              key={index}
              item={item}
              cartList={cartList}
              setCartList={setCartList}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Store;
