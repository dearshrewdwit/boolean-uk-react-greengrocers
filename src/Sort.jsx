export default function Sort({ storeItems, filteredItems, setFilteredItems }) {
  //Adding sort function:
  function sortStoreItems(event) {
    if (event.target.value === "alphabet") {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredItems([...filteredItems]);
    } else if (event.target.value === "price") {
      filteredItems.sort((a, b) => a.price - b.price);
      setFilteredItems([...filteredItems]);
    } else {
      console.log("no sortig needed");
    }
  }

  return (
    <div>
      <label htmlFor="sort">Sort By: </label>
      <select name="sort" id="sort" onChange={sortStoreItems}>
        <option value="default">Select Type</option>
        <option value="alphabet">Alphabet</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}
