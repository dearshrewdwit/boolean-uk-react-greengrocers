export default function ProductItems({onItemClick, productList}) {
    return (<ul className="item-list store--item-list">{productList.map((item) => {return <li>
        <div class="store--item-icon">
          <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
        </div>
        <button onClick={onItemClick(item)}>Add to cart</button>
      </li>})}</ul>)
}