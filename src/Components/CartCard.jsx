export default function Cart({ cart }) {
  return cart.map((item, index) => {
    if (!cart.includes(item))
    return (
      <li key={index}>
        <img
          src={`/assets/icons/${item.id}.svg`}
          alt={item.name}
          className="cart--item-icon"
        />
        <p>{item.name}</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">1</span>
        <button className="quantity-btn add-btn center">+</button>
      </li>
    );
  });
}

{
  /* <li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg"
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li> */
}
