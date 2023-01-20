function Cart(props) {
  const cartItems = props.itemsForCart
  console.log(cartItems)

  return (
    <>
      {/* {cartItems.map((cartFruit, index) => (
        <li>
          <img src={`./assets/icons/${cartItems.id}.svg`}></img>
          <p>{cartItems.name}</p>
          <button>-</button>
          <p></p>
          <button>+</button>
        </li>
      ))} */}
    </>
  )
}

export default Cart
