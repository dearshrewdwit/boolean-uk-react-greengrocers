function Header(props) {
  const addToCart = (target) => {
    if (!target.count) {
      target.count = 0;
    }
    target.count += 1;

    //If item doesnt exists in the list, add it
    let updatedList = props.cartList;
    if (!props.cartList.find((item) => item.id === target.id)) {
      updatedList = [...props.cartList, target];
    }

    props.setCartList(updatedList);
  };
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {props.productList.map((product, index) => (
          <li key={index}>
            <div className="store--item-icon">
              <img src={`images/icons/${product.id}.svg`} alt={product.name} />
            </div>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Header;
