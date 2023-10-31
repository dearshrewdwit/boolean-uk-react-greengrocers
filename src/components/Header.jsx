function Header ({storeItems, cartItems, setCartItems, filteredItems, setFilteredItems}) {

    //function to add items to cart when button is clicked
    function addItem(itemTocart) {
        const addedItem = cartItems.find((item) => item.id === itemTocart.id)
        if (addedItem) {
            addedItem.quantity++
            setCartItems([...cartItems])
        } else {
            itemTocart.quantity = 1
            setCartItems([...cartItems, itemTocart])
        }
    }

    //function to filter items by name when the name is typed into the input field and only render that item on the page
    // function filteredStoreItems(inputValue) {
    //     console.log(inputValue)
    //     const filteredItems = storeItems.filter((item) => {
    //         return item.name.toLowerCase().includes(inputValue.toLowerCase())
    //     })
    //     console.log(filteredItems)
    //     setFilteredItems(filteredItems)
    // }

    function filteredStoreItems(inputValue) {
        if (inputValue.trim() === "") {
          console.log(inputValue); 
          setFilteredItems(storeItems); 
        } else {
          
          console.log(inputValue); 
          const filteredItems = storeItems.filter((item) => {
            return item.name.toLowerCase().includes(inputValue.toLowerCase());
          });
          console.log(filteredItems); 
          setFilteredItems(filteredItems); 
        }
      }

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <div className = "filters">
                <label htmlFor="filter">Filter by name:</label>
                <input
                    type="text"
                    id="filter"
                    name="filter"
                    onChange={(e) => filteredStoreItems(e.target.value)}
                />
            </div>
            <ul className="item-list store--item-list">
                {filteredItems.map(item => {
                    return (
                        <li key={item.id} className="store--item">
                            <div className="store--item-icon">
                                <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
                            </div>
                            <button className="btn btn-primary btn-add" onClick={() => addItem(item)}>Add To Cart</button>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}

export default Header