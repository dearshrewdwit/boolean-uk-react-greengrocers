export default function Header(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {props.products.map((product, index) => {
          return (
            <li key={index}>
              <div className="store--item-icon">
                <img src={`./assets/icons/${product.id}.svg`} alt="beetroot" />
              </div>
              <button id={product.id} onClick={props.handleAddToCartClick}>
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
