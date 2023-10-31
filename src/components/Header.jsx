

function Header({storeItem,cartItem,setCartItem}){
    function addToList(additem){
      const itemToAdd = cartItem.find((newItem) => newItem.id === additem.id)
      if(itemToAdd){
        itemToAdd.quantity++;
        setCartItem([...cartItem]);
      }else{
        additem.quantity=1;
        setCartItem([...cartItem,additem])
      }
    }
    console.log(storeItem)
    return(
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItem.map((item)=>{
            return(
                <li key={item.id}>
                    <div className="store--item-icon">
                        <img src={`/assets/icons/${item.id}.svg`} alt={`${item.name}`} />
                    </div>
                    <button onClick={() => addToList(item)}>Add to cart</button>
                </li>
            )
          })}
        </ul>
      </header>
    )

}
export default Header