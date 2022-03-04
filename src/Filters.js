function Filters(props) {
  // A function that takes the argument e which is the event object from the listener, then checks if the value
  // on that object is equal to fruit or veg, if it is then it creates a filtered array from the initial array
  // and sets the items array to be that new array, or it sets the items array to be the initial array which
  // has the effect of restoring the starting items into the items array and therefore the store
  const filterItems = e => {
    if (e.target.value === 'veg' || e.target.value === 'fruit') {
      props.setItems(
        initialStoreItems.filter(item => item.category === e.target.value)
      )
    } else props.setItems(props.initialStoreItems)
  }

  // My sort function which works out from the drop down event object whether to call the sort by name function
  // or the sort by number function. I tried to deal with both data types in one function but could not make
  // this work
  const sort = e => {
    if (e === 'name') {
      sortByName()
    } else sortByPrice()
  }

  // Sort by name works by creating a copy of the items array then calling the built in JS sort method on it.
  // This method takes an optional compare function which defines the sort order and sorts the array IN PLACE.
  // In this case it compares a to b, and it returns a value based on the result of the comparison which is then
  // used to sort the array, -1 goes before, 0 stays where it is, 1 goes after. This newly sorted array is then
  // set to be items by the setItems function
  const sortByName = () => {
    const sorted = [...props.items].sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    props.setItems(sorted)
  }
  // This is very similar to the sort by name, uses the same idea but is simpler becuase it is sorting
  // numbers
  const sortByPrice = () => {
    const sorted = [...props.items].sort((a, b) => a.price - b.price)
    props.setItems(sorted)
  }

  return (
    <>
      <label for="type">Choose your culinary weapon:</label>
      <select onChange={e => filterItems(e)} name="type" id="type">
        <option value="everything">Everything</option>
        <option value="fruit">Fruit</option>
        <option value="veg">Vegetables</option>
      </select>
      <label for="type">Arrange items:</label>
      <select onChange={e => sort(e.target.value)} name="type" id="type">
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>
    </>
  )
}

export default Filters
