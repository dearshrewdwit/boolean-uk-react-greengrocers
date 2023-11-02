/* eslint-disable react/prop-types */

import Filter from "./filter"

function Header ({Store, imageSources, AddToCart, cart, setCart}) {

    return (
        <>
        <header id="store">
        <h1>Greengrocers</h1>
        <Filter cart={cart} Store={Store} setCart={setCart}></Filter>
        <ul className="item-list store--item-list">
          {Store.map((item, index) => {
            return (
              <li key={item.id}> 
                 <div className='store--item-icon'> 
                    <img src={imageSources[index]} alt={item.name} />
                 </div>
                 <button onClick={() => AddToCart(item, index)}>Add To Cart</button>
              </li>
            )
          })}
        </ul>
      </header>

        </>
    )
}

export default Header
