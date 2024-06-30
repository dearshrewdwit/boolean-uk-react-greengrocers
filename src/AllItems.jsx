import initialStoreItems from "./store-items";

export default function allItems() {
  return initialStoreItems.map((item) => {
    return (
      <li key={item.id}>
        <div className="store--item-icon">
          <img src="/assets/icons/001-beetroot.svg" alt="beetroot" />
        </div>
        <button>Add to cart</button>
      </li>
    );
  });
}
