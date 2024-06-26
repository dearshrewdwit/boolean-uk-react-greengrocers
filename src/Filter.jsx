export default function Filter({ storeItems, setFilteredItems }) {
  //function to filter items in store:
  function FilterStoreItems(event) {
    console.log("filter event", event.target.value);

    if (event.target.value === "vegetable" || event.target.value === "fruit") {
      setFilteredItems(
        storeItems.filter((item) => item.type === event.target.value)
      );
    } else {
      setFilteredItems(storeItems);
    }
  }

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select name="filter" id="filter" onChange={FilterStoreItems}>
        <option value="default">Select Type</option>
        <option value="vegetable">Vegetable</option>
        <option value="fruit">Fruit</option>
      </select>
    </div>
  );
}
