
const imageSources = [
    './assets/icons/001-beetroot.svg',
    './assets/icons/002-carrot.svg',
    './assets/icons/003-apple.svg',
    './assets/icons/004-apricot.svg',
    './assets/icons/005-avocado.svg',
    './assets/icons/006-bananas.svg',
    './assets/icons/007-bell-pepper.svg',
    './assets/icons/008-berry.svg',
    './assets/icons/009-blueberry.svg',
    './assets/icons/010-eggplant.svg'
  ];


function AvailableItems({items, addToCart}) {
    return (

        <header id="store">
          <h1>Greengrocers</h1>
          <ul className="item-list store--item-list">
            {items.map((item) => (
              <li key={item.id}>
                <div className="store--item-icon">
                  <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <button onClick={() => addToCart(item)}>Add to cart</button>
                <p>{item.name.toUpperCase()}</p>
                <p>${item.price.toFixed(2)}</p>
              </li>
            ))}

          </ul>
        </header>
    )
}

export default AvailableItems