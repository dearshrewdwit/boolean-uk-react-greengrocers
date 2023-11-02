/* eslint-disable react/prop-types */
function Filter({cart, Store, setCart}) {

    const HandleFilterChange = (event) => {
        event.preventDefault()
    
        console.log('inside filter')
        const selectedType = event.target.value
    
        const CartFilterItem = Store.filter((item ) => item.name.toLowerCase() === selectedType.toLowerCase())
        console.log(CartFilterItem)
        // const Total_Amount = Total + item.price
        // setTotal(Total_Amount)
    
        if (CartFilterItem.length === 0) {
          console.log('they is nothing there to see!')
        } else {
          setCart(CartFilterItem)
        }
      }
    return (
    <>

    <form className="filter" >
    <label> 
        Types of fruit <br />
        <select name="" id="">
            <option value="select-type">select type</option>
            <option value="Banana" onClick={(event) => HandleFilterChange(event)} > Banana</option>
            <option value="Apple" onClick={(event) => HandleFilterChange(event)} >Apple</option>
            <option value="Beetroot" onClick={(event) => HandleFilterChange(event)}>Beetroot</option>
        </select>
      </label>

    </form>
    </>
    )
}


export default Filter