/* eslint-disable react/prop-types */

function Store({ fruits, addToCart, showDetails }) {

    return (
      <>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <img
              className="store--item-icon "
              src={`./assets/icons/${fruit.id}.svg`}
              onClick={() => { showDetails(fruit) }}
            ></img>
            <button onClick={() => addToCart(fruit.id)}>Add To Cart</button>
          </li>
        ))}
      </>
    )
  }
  
  export default Store