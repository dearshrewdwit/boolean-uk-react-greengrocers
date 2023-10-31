

export default function Header({addItemToCart, storeItems}) {
  return (
    <header id="store">
<h1>Greengrocers</h1>
<ul className="item-list store--item-list">
  {storeItems.map((item) => {
    return (
      <li key={item.id}>
        <div className="store--item-icon">
          <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
        </div>
        <button onClick={() => addItemToCart(item)}>Add to cart</button>
      </li>
    );
  })}
</ul>
</header>
  )
}

// const cartItemMatch = state.cart.find(eachCartItem => eachCartItem.id === item.id)

//       if (cartItemMatch) {
//         ++cartItemMatch.quantity 
//       }else {
//         cart.push({...item, quantity: 1})
//       }
//       renderCartItems()
//     })
