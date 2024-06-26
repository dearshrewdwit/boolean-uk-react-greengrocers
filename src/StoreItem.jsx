const StoreItem = ({ item, addItem }) => {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`./assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => addItem(item)}>Add to cart</button>
    </li>
  );
};

export default StoreItem;
