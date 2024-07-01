export default function Sort({ storeItems, filteredItems, setFilteredItems }) {
  //Adding sort function:
  function sortStoreItems(event) {
    if (event.target.value === "alphabet") {
      const alphabetArray = [...filteredItems];
      alphabetArray.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredItems(alphabetArray);
    } else if (event.target.value === "price") {
      const priceArray = [...filteredItems];
      priceArray.sort((a, b) => a.price - b.price);
      setFilteredItems(priceArray);
    } else {
      console.log("no sorting needed");
      setFilteredItems(storeItems);
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
