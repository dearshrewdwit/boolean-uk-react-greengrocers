import StoreItem from "./StoreItem";

export default function Store({itemsInStore, setItemsInStore, items, total, setTotal, itemsInCart, setItemsInCart}) {

  return (
    //  
    <>
    {itemsInStore &&
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
            {itemsInStore.map((e) => (
              <StoreItem key={e.id +"-store"} itemsInStore={itemsInStore} item={e} setItemsInStore={setItemsInStore} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} total={total} setTotal={setTotal} items={items}/>
            ))}
          </ul>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£ ${total.toFixed(2)}`}</span>
          </div>
        </div>
        </header>
    }
      </>
  );
}